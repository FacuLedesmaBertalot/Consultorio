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

export {
    registrar
};
