import express from 'express';
import cors from 'cors';
import personaRoutes from './routes/personaRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/personas', personaRoutes);

app.listen(4000, () => console.log('API escuchando en http://localhost:4000'));