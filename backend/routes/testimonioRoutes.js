import express from 'express';
import {
    crearTestimonio,
    obtenerTestimoniosPublicos,
    obtenerTestimoniosAdmin,
    cambiarEstadoTestimonio,
    eliminarTestimonio
} from '../Controllers/testimonioController.js';
import checkAuth from '../middleware/authMiddleware.js';

const router = express.Router();

// Rutas Públicas
router.post('/', crearTestimonio);
router.get('/publicos', obtenerTestimoniosPublicos);

// Rutas Privadas (Requieren Token)
router.get('/admin', checkAuth, obtenerTestimoniosAdmin);
router.put('/admin/:id', checkAuth, cambiarEstadoTestimonio);
router.delete('/admin/:id', checkAuth, eliminarTestimonio);

export default router;
