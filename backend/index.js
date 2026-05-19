import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";
import conectarDB from "./config/db.js";
import medicoRoutes from './routes/medicoRoutes.js';
import turnoRoutes from './routes/turnoRoutes.js';
import testimonioRoutes from './routes/testimonioRoutes.js';

const app = express();
app.use(express.json());

// Conectar a la base de datos
conectarDB();

// Configuración de CORS
const dominiosPermitidos = [
    process.env.FRONTEND_URL,
    'http://localhost:5173'
];

const corsOptions = {
    origin: function(origin, callback) {
        if (!origin || dominiosPermitidos.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('No permitido por CORS'));
        }
    }
};

app.use(cors(corsOptions));

// --- RUTA DE PRUEBA ---
app.get('/ping', (req, res) => {
    res.send('API del consultorio viva y funcionando 🚀');
});

// --- RUTAS PRINCIPALES ---
app.use('/api/medicos', medicoRoutes);
app.use('/api/turnos', turnoRoutes);
app.use('/api/testimonios', testimonioRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor Funcionando en el puerto ${PORT}`);
});