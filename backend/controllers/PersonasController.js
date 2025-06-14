const personasModel = require('../models/PersonasModel');

exports.getPersonas = (req, res) => {
  const personas = personasModel.getAll();
  res.json(personas);
};