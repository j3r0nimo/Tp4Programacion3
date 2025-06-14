const express = require('express');
const cors = require('cors');
const personasControlador = require('./controllers/PersonasController')
const app = express();

app.use(cors());
app.use(express.json());
app.get('/personas', personasControlador.getPersonas);

app.listen(3001, () => console.log("server en http://localhost:3001"))