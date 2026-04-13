import express from 'express';
import { agregarPaciente, obtenerPaciente } from '../Controllers/pacienteController.js';
import checkAuth from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
    .post(checkAuth, agregarPaciente)
    .get(checkAuth, obtenerPaciente);

export default router;