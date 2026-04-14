import express from 'express';
import checkAuth from '../middleware/authMiddleware.js';
import { 
    agregarPaciente, 
    obtenerPacientes,
    obtenerPaciente,
    actualizarPaciente,
    eliminarPaciente
} from '../Controllers/pacienteController.js';

const router = express.Router();

// PÚBLICA: Cualquier persona en internet puede crear un turno
router.post('/', agregarPaciente); 

// PRIVADA: Solo el médico logueado puede ver su lista de turnos
router.get('/', checkAuth, obtenerPacientes); 

// PRIVADAS: Solo el médico puede ver detalle, editar o eliminar
router.route('/:id')
    .get(checkAuth, obtenerPaciente)
    .put(checkAuth, actualizarPaciente)
    .delete(checkAuth, eliminarPaciente);

export default router;