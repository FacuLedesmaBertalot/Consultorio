import crypto from 'crypto';
import Turno from '../models/Turno.js';
import Medico from '../models/Medico.js';
import { emailNuevoTurno } from '../helpers/email.js';

const obtenerHorariosOcupados = async (req, res) => {
    const { medicoId, fecha } = req.params;

    try {
        const turnos = await Turno.find({ medico: medicoId, fecha: fecha }).select('horario');
        const ocupados = turnos.map(turno => turno.horario);
        res.json(ocupados);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error al consultar disponibilidad' });
    }
};

const crearTurno = async (req, res) => {
    try {
        const codigoHex = crypto.randomBytes(32).toString('hex');

        const turno = new Turno({
            ...req.body,
            tokenCancelacion: codigoHex
        });
        const turnoGuardado = await turno.save();

        const medicoEncontrado = await Medico.findById(req.body.medico);

        try {
            await emailNuevoTurno({
                email: req.body.paciente.email,
                nombre: req.body.paciente.nombre,
                medico: medicoEncontrado.nombre,
                especialidad: medicoEncontrado.especialidad || "Atención Médica",
                fecha: req.body.fecha,
                hora: req.body.horario,
                tokenCancelacion: turnoGuardado.tokenCancelacion
            });
        } catch (errorEmail) {
            console.log("Error enviando el email de confirmación:", errorEmail);
        }
    
        res.json({ msg: 'Turno reservado correctamente', turno: turnoGuardado });

    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: 'Error al guardar el turno. Verifica que el horario siga disponible.' });
    }
};


const obtenerTurnosMedico = async (req, res) => {
    try {
        const turnos = await Turno.find({ medico: req.medico._id }).sort({ fecha: 1, horario: 1 });
        res.json(turnos);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error al obtener los turnos' });
    }
}


const eliminarTurno = async (req, res) => {
    const { id } = req.params;

    try {
        const turno = await Turno.findById(id);

        if (!turno) {
            return res.status(404).json({ msg: 'Turno no encontrado' });
        }

        if (turno.medico.toString() !== req.medico._id.toString() ) {
            return res.status(401).json({ msg: 'No tienes permiso para eliminar este turno' });
        }

        await turno.deleteOne();
        res.json({ msg: 'Turno eliminado correctamente' });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Hubo un error en el servidor al eliminar el turno' });
    }
};

const cancelarTurnoPaciente = async (req, res) => {
    const { token } = req.body;

    try {
        if (!token) {
            return res.status(400).json({ msg: 'Código de cancelación requerido.' });
        }

        const turno = await Turno.findOne({ tokenCancelacion: token });

        if (!turno) {
            return res.status(404).json({ msg: 'El enlace de cancelación es inválido o ya expiró.' });
        }

        await turno.deleteOne();
        
        res.json({ msg: 'Turno cancelado correctamente' });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Hubo un error en el servidor al procesar la cancelación' });
    }
};

export { obtenerHorariosOcupados, crearTurno, obtenerTurnosMedico, eliminarTurno, cancelarTurnoPaciente };