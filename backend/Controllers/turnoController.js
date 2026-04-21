import Turno from "../Models/Turno.js";

const obtenerHorariosOcupados = async (req, res) => {
    const { medicoId, fecha } = req.params;

    try {
        const turnos = await Turno.find({
            medico: medicoId,
            fecha: fecha
        }).select('horario');

        const ocupados = turnos.map( turno => turno.horario);

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

        res.json({ msg: 'Turno reservado correctamente', turno: turnoGuardado });
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: 'Error al guardar el turno. Verifica que el horario siga disponible' });
    }
};

export { obtenerHorariosOcupados, crearTurno };