import express from 'express';
const router = express.Router();
import { registrar } from '../Controllers/MedicoController.js';

router.post('/', registrar);

export default router;