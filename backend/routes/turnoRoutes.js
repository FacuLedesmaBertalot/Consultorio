import express from 'express';
import { 
    obtenerHorariosOcupados, 
    crearTurno, 
    obtenerTurnosMedico, 
    eliminarTurno,
    cancelarTurnoPaciente
} from '../Controllers/turnoController.js';
import checkAuth  from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', crearTurno);

// Rutas Públicas (Pacientes)
router.get('/ocupados/:medicoId/:fecha', obtenerHorariosOcupados);
router.post('/cancelar', cancelarTurnoPaciente);

// Rutas Privadas (Médicos)
router.get('/', checkAuth, obtenerTurnosMedico);
router.delete('/:id', checkAuth, eliminarTurno);

export default router;