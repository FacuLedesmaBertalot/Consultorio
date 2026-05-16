import axios from 'axios';

const URL_BASE = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000/api";

export const cancelarTurnoAPI = async (token) => {
    try {
        const response = await axios.post(`${URL_BASE}/turnos/cancelar`, { token });
        
        return response.data; 
    } catch (error) {
        const mensajeError = error.response?.data?.msg || "Hubo un problema al procesar la cancelación.";
        throw new Error(mensajeError);
    }
};