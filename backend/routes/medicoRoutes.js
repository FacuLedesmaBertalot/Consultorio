import express from 'express';
import checkAuth from '../middleware/authMiddleware.js';
import checkRole from '../middleware/checkRole.js';
import upload from '../middleware/subirImagen.js';

import { 
    registrar, 
    autenticar, 
    perfil, 
    confirmar, 
    olvidePassword, 
    comprobarToken, 
    nuevoPassword,
    obtenerMedicosPublicos,
    obtenerMedicosPorEspecialidad,
    actualizarPerfil,
    adminObtenerMedicos,
    adminEliminarMedico,
    adminAprobarMedico
} from '../Controllers/medicoController.js';


const router = express.Router();

// Área Pública
router.post('/', registrar);
router.post('/login', autenticar);
router.get('/publicos', obtenerMedicosPublicos);
router.get('/especialidad/:especialidad', obtenerMedicosPorEspecialidad);

router.put('/perfil/:id', checkAuth, upload.single('imagen'), actualizarPerfil);

// Rutas para el manejo de correos y contraseñas
router.get('/confirmar/:token', confirmar);
router.post('/olvide-password', olvidePassword);

router.route('/olvide-password/:token')
    .get(comprobarToken)
    .post(nuevoPassword);

// Área Privada (Cualquier usuario logueado)
router.get('/perfil', checkAuth, perfil);

// Área SuperAdmin
router.get('/admin/todos', checkAuth, checkRole('superadmin'), adminObtenerMedicos);
router.delete('/admin/eliminar/:id', checkAuth, checkRole('superadmin'), adminEliminarMedico);
router.put('/admin/aprobar/:id', checkAuth, checkRole('superadmin'), adminAprobarMedico);

export default router;