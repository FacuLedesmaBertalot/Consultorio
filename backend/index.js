import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import conectarDB from "./config/db.js";
// import veterinarioRoutes from "./routes/veterinarioRoutes.js";
// import pacienteRoutes from "./routes/pacienteRoutes.js";

const app = express();

// Permitir leer datos en formato JSON
app.use(express.json());

// Cargar variables de entorno ANTES de conectar la DB
dotenv.config();

// Conectar a la base de datos
conectarDB();

// Configuración de CORS
const dominiosPermitidos = [process.env.FRONTEND_URL];

const corsOptions = {
    origin: function(origin, callback) {
        // !origin permite peticiones directas (Postman, navegador, etc.)
        // dominiosPermitidos verifica que la petición venga de tu React
        if (!origin || dominiosPermitidos.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('No permitido por CORS'));
        }
    }
};

app.use(cors(corsOptions));

// --- RUTAS ---

// Ruta de diagnóstico (Para probar si el backend funciona solo)
// app.get('/', (req, res) => {
//     res.send('API de Pacientes Veterinaria funcionando correctamente');
// });

// app.use("/api/veterinarios", veterinarioRoutes);
// app.use("/api/pacientes", pacienteRoutes);

// Definir el puerto (Hostinger asigna uno automáticamente, local usa 4000)
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor Funcionando en el puerto ${PORT}`);
});

