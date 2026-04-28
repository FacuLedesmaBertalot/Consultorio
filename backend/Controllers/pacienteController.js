import Medico from "../models/Medico.js";
import Paciente from "../models/Paciente.js";
import { emailNuevoTurno } from "../helpers/email.js";

const agregarPaciente = async (req, res) => {

    const paciente = new Paciente(req.body);

    try {
        const medicoDB = await Medico.findById(paciente.medico);
        
        if (!medicoDB) {
            return res.status(404).json({ msg: 'El médico seleccionado no existe' });
        }

        const pacienteGuardado = await paciente.save();

        emailNuevoTurno({
            email: pacienteGuardado.email,
            nombre: pacienteGuardado.nombre,
            medico: medicoDB.nombre,
            especialidad: medicoDB.especialidad, 
            fecha: pacienteGuardado.fecha.toLocaleDateString('es-ES'),
            hora: pacienteGuardado.hora
        });

        res.json(pacienteGuardado);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Hubo un error al guardar el turno'});
    }

};


const obtenerPacientes = async (req, res) => {
    const pacientes = await Paciente.find().where('medico').equals(req.medico._id);
    res.json(pacientes);
};


const obtenerPaciente = async (req, res) => {
    const { id } = req.params;
    const paciente = await Paciente.findById(id);

    if (!paciente) {
        return res.status(404).json({ msg: 'No Encontrado' });
    }

    if (paciente.medico.toString() !== req.medico._id.toString()) {
        return res.json({ msg: 'Acción no válida' });
    }

    res.json(paciente);
};


const actualizarPaciente = async (req, res) => {
    const { id } = req.params;
    const paciente = await Paciente.findById(id);

    if (!paciente) {
        return res.status(404).json({ msg: 'No encontrado' });
    }

    if (paciente.medico.toString() !== req.medico._id.toString()) {
        return res.json({ msg: 'Acción no válida' });
    }

    // Actualizar campos
    paciente.nombre = req.body.nombre || paciente.nombre;
    paciente.email = req.body.email || paciente.email;
    paciente.telefono = req.body.telefono || paciente.telefono;
    paciente.fecha = req.body.fecha || paciente.fecha;
    paciente.hora = req.body.hora || paciente.hora;

    try {
        const pacienteActualizado = await paciente.save();
        res.json(pacienteActualizado);
    } catch (error) {
        console.log(error);
    }

};


const eliminarPaciente = async (req, res) => {
    const { id } = req.params;
    const paciente = await Paciente.findById(id);

    if (!paciente) {
        return res.status(404).json({ msg: 'No encontrado' });
    }

    if (paciente.medico.toString() !== req.medico._id.toString()) {
        return res.json({ msg: 'Acción no válida' });
    }

    try {
        await paciente.deleteOne();
        res.json({ msg: 'Turno Eliminado Correctamente' });
    } catch (error) {
        console.log(error);
    }
};


export {
    agregarPaciente,
    obtenerPacientes,
    obtenerPaciente,
    actualizarPaciente,
    eliminarPaciente
};