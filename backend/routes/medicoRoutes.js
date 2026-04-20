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
    obtenerMedicosPublicos,
    obtenerMedicosPorEspecialidad
} from '../Controllers/medicoController.js';


const router = express.Router();

// Área Pública
router.post('/', registrar);
router.post('/login', autenticar);
router.get('/publicos', obtenerMedicosPublicos);
router.get('/especialidad/:especialidad', obtenerMedicosPorEspecialidad);

// Rutas para el manejo de correos y contraseñas
router.get('/confirmar/:token', confirmar);
router.post('/olvide-password', olvidePassword);

router.route('/olvide-password/:token')
    .get(comprobarToken)
    .post(nuevoPassword);

// Área Privada
router.get('/perfil', checkAuth, perfil);

export default router;