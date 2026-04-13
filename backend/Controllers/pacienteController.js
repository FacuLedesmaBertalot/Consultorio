import Paciente from "../Models/Paciente.js";

const agregarPaciente = async (req, res) => {

    const paciente = new Paciente(req.body);

    paciente.medico = req.medico._id;

    try {
        const pacienteGuardado = await paciente.save();
        res.json(pacienteGuardado);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Hubo un error al guardar el turno'});
    }

};

const obtenerPaciente = async (req, res) => {
    const pacientes = await Paciente.find().where('medico').equals(req.medico._id);
    res.json(pacientes);
};

export {
    agregarPaciente,
    obtenerPaciente
};