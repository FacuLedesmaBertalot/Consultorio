import Medico from "../Models/Medico.js";
import generarId from "../helpers/generarId.js";
import generarJWT from '../helpers/generarJWT.js';
import { emailRegistro, emailOlvidePassword } from "../helpers/email.js";

const registrar = async (req, res) => {
    const {email, matricula} = req.body;

    // Previene duplicados
    const existeEmail = await Medico.findOne({ email });

    if (existeEmail) {
        const error = new Error('El Correo ya está registrado');
        return res.status(400).json({ msg: error.message});
    }

    const existeMatricula = await Medico.findOne({ matricula });

    if (existeMatricula) {
        const error = new Error('Esta matrícula ya se encuentra registrada');
        return res.status(400).json({ msg: error.message});
    }

    try {
        const medico = new Medico(req.body);
        const medicoGuardado = await medico.save();

        emailRegistro({
            email: medicoGuardado.email,
            nombre: medicoGuardado.nombre,
            token: medicoGuardado.token
        });

        res.json({
            msg: 'Registrando Médico...',
            medico: {
                nombre: medicoGuardado.nombre,
                email: medicoGuardado.email,
                matricula: medicoGuardado.matricula
            }
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Hubo un error al registrar' });
    }
};


const perfil = (req, res) => {
    const { medico } = req;
    res.json(medico);
};


const autenticar = async (req, res) => {
    const { email, password } = req.body;

    const usuario = await Medico.findOne({ email });

    if (!usuario) {
        const error = new Error('El Usuario no Existe');
        return res.status(404).json({ msg: error.message });
    }

    if (!usuario.confirmado) {
        const error = new Error('Tu cuenta no ha sido Confirmada');
        return res.status(403).json({ msg: error.message });
    }

    if (await usuario.comprobarPassword(password)) {
        res.json({
            _id: usuario._id,
            nombre: usuario.nombre,
            email: usuario.email,
            token: generarJWT(usuario._id)
        });

    } else {
        const error = new Error('El Password es incorrecto');
        return res.status(403).json({ msg: error.message });
    }
}


const confirmar = async (req, res) => {
    const { token } = req.params;
    const usuarioConfirmar = await Medico.findOne({ token });

    if (!usuarioConfirmar) {
        const error = new Error('Token no válido');
        return res.status(400).json({ msg: error.message });
    }

    try {
        usuarioConfirmar.token = null;
        usuarioConfirmar.confirmado = true;
        await usuarioConfirmar.save();
        res.json({ msg: 'Usuario Confirmado Correctamente'});

    } catch (error) {
        console.log(error);
    }
}


const olvidePassword = async (req, res) => {
    const { email } = req.body;
    const existeMedico = await Medico.findOne({ email });

    if (!existeMedico) {
        const error = new Error('El Usuario no existe');
        return res.status(404).json({ msg: error.message });
    }

    try {
        existeMedico.token = generarId();
        await existeMedico.save();

        // Enviar email con instrucciones
        emailOlvidePassword({
            email,
            nombre: existeMedico.nombre,
            token: existeMedico.token
        });

        res.json({ msg: 'Hemos enviado un email con las instrucciones' });
    } catch (error) {
        console.log(error);
    }
}

const comprobarToken = async (req, res) => {
    const { token } = req.paramsM
    const tokenValido = await Medico.findOne({ token });

    if (tokenValido) {
        res.json({ msg: 'Token Válido y el usuario existe'});
    } else {
       const error = new Error('Token no válido');
       return res.status(400).json({ msg: error.message }); 
    }
};


const nuevoPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    const medico = await Medico.findOne({ token });

    if (!medico) {
        const error = new Error('Hubo un error');
        return res.status(400).json({ msg: error.message });
    }

    try {
        medico.token = null;
        medico.password = password; 
        await medico.save();
        res.json({ msg: 'Password modificado correctamente' });
    } catch (error) {
        console.log(error);
    }
};

const obtenerMedicosPublicos = async (req, res) => {
    const medicos = await Medico.find({ confirmado: true }).select('_id nombre especialidad');
    res.json(medicos);
}


export {
    registrar,
    autenticar,
    perfil,
    confirmar,
    olvidePassword,
    comprobarToken,
    nuevoPassword,
    obtenerMedicosPublicos
};