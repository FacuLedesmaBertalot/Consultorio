import express from 'express';
import checkAuth from '../middleware/authMiddleware.js';

import { registrar, autenticar, perfil } from '../Controllers/MedicoController.js';


const router = express.Router();

router.post('/', registrar);
router.post('/login', autenticar);

// Área Privada
router.get('/perfil', checkAuth, perfil);

export default router;