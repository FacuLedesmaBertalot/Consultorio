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
        const turno = new Turno(req.body);
        const turnoGuardado = await turno.save();

        const medicoEncontrado = await Medico.findById(req.body.medico);

        try {
            await emailNuevoTurno({
                email: req.body.paciente.email,
                nombre: req.body.paciente.nombre,
                medico: medicoEncontrado.nombre,
                especialidad: medicoEncontrado.especialidad || "Atención Médica",
                fecha: req.body.fecha,
                hora: req.body.horario
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

export { obtenerHorariosOcupados, crearTurno };