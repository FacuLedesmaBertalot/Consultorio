import express from 'express';
import { obtenerHorariosOcupados, crearTurno } from '../Controllers/turnoController.js';

const router = express.Router();

router.get('/ocupados/:medicoId/:fecha', obtenerHorariosOcupados);
router.post('/', crearTurno);

export default router;