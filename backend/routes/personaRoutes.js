import express from 'express';
import { obtenerPersonas } from '../controllers/personaController.js';

const router = express.Router();

router.get('/', obtenerPersonas);

export default router;