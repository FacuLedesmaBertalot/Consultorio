import express from 'express';
import checkAuth from '../middleware/authMiddleware.js';

import { 
    registrar, 
    autenticar, 
    perfil, 
    confirmar, 
    olvidePassword, 
    comprobarToken, 
    nuevoPassword,
    obtenerMedicosPublicos
} from '../Controllers/medicoController.js';


const router = express.Router();

// Área Pública
router.post('/', registrar);
router.post('/login', autenticar);
router.get('/publicos', obtenerMedicosPublicos);

// Rutas para el manejo de correos y contraseñas
router.get('/confirmar/:token', confirmar);
router.post('/olvide-password', olvidePassword);

router.route('/olvide-password/:token')
    .get(comprobarToken)
    .post(nuevoPassword);

// Área Privada
router.get('/perfil', checkAuth, perfil);

export default router;