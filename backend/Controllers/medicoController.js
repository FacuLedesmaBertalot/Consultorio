import Medico from "../Models/Medico.js";

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

export {
    registrar,
    autenticar,
    perfil
};
