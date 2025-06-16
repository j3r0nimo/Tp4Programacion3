import { getPersonas } from '../models/personaModel.js';

export const obtenerPersonas = ( req, res ) => {
    res.json(getPersonas());
}