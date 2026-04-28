import express from 'express';
import { obtenerHorariosOcupados, crearTurno, obtenerTurnosMedico } from '../controllers/turnoController.js';
import checkAuth  from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', crearTurno);

// Rutas Públicas (Pacientes)
router.get('/ocupados/:medicoId/:fecha', obtenerHorariosOcupados);

// Rutas Privadas (Médicos)
router.get('/', checkAuth, obtenerTurnosMedico);


export default router;