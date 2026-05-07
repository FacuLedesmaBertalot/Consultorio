// Definimos la URL base una sola vez
const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000/api";

export const registrarMedicoAPI = async datosMedicos => {
    try {
        // Usamos BASE_URL en lugar de import.meta.env...
        const url = `${BASE_URL}/medicos`; 
        const respuesta = await fetch(url, {
            method: 'POST', // Corregido a mayúsculas por convención
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datosMedicos)
        });

        const resultado = await respuesta.json();
        return { ok: respuesta.ok, data: resultado };
    } catch (error) {
        return { ok: false, data: { msg: "Error de conexión" }};
    }
}

export const loginMedicoAPI = async (credenciales) => {
    try {
        // Usamos BASE_URL aquí también
        const url = `${BASE_URL}/medicos/login`;
        const respuesta = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credenciales)
        });

        const resultado = await respuesta.json();

        return {
            ok: respuesta.ok,
            data: resultado
        }
    } catch (error) {
        console.log("Error en loginMedicoAPI:", error);
        return {
            ok: false,
            data: { msg: "Error de conexión con el servidor" }
        }
    }
}