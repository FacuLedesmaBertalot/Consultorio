import jwt from 'jsonwebtoken';
import Medico from '../models/Medico.js';

const checkAuth = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // MÉTODO A PRUEBA DE BALAS: Reemplazamos la palabra y limpiamos los espacios invisibles
            token = req.headers.authorization.replace('Bearer', '').trim();
            
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.medico = await Medico.findById(decoded.id).select("-password -token -confirmado");
            
            return next();
        } catch (error) {
            console.log("Error de JWT:", error.message);
            const e = new Error('Token no válido');
            return res.status(403).json({ msg: e.message });
        }
    }

    if (!token) {
        const error = new Error('Token inexistente');
        res.status(403).json({ msg: error.message });
    }
};

export default checkAuth;
