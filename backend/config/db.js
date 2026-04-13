import mongoose from "mongoose";
import dns from "node:dns"; // 1. Importamos el módulo de red de Node

// 2. Le decimos a Node que use Google solo para este proyecto
dns.setServers(['8.8.8.8', '8.8.4.4']);

const conectarDB = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URI);
        const url = `${db.connection.host}:${db.connection.port}`;
        console.log(`MongoDB conectado en: ${url}`);
    } catch (error) {
        console.log(`error: ${error.message}`);
        process.exit(1);
    }
};

export default conectarDB;