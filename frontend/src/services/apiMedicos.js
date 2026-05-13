const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000/api";

export const registrarMedicoAPI = async datosMedicos => {
    try {
        const url = `${BASE_URL}/medicos`; 
        const respuesta = await fetch(url, {
            method: 'POST',
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


export const confirmarCuentaAPI = async (id) => {
    try {
        const url = `${BASE_URL}/medicos/confirmar/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        return { ok: respuesta.ok, data: resultado };
    } catch (error) {
        return { ok: false, data: { msg: "Error de conexión con el servidor" } };
    }
};


export const olvidePasswordAPI = async (datos) => {
    try {
        const url = `${BASE_URL}/medicos/olvide-password`;
        const respuesta = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });

        const resultado = await respuesta.json();
        return {
            ok: respuesta.ok,
            data: resultado
        };
    } catch (error) {
        console.log("Error en olvidePasswordAPI:", error);
        return {
            ok: false,
            data: { msg: "Error de conexión con el servidor" }
        };
    }
}



export const comprobarTokenAPI = async (token) => {
    try {
        const url = `${BASE_URL}/medicos/olvide-password/${token}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        return { ok: respuesta.ok, data: resultado };
    } catch (error) {
        return { ok: false, data: { msg: "Error al validar el token" } };
    }
};


export const nuevoPasswordAPI = async (token, password) => {
    try {
        const url = `${BASE_URL}/medicos/olvide-password/${token}`;
        const respuesta = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password })
        });
        const resultado = await respuesta.json();
        return { ok: respuesta.ok, data: resultado };
    } catch (error) {
        return { ok: false, data: { msg: "Error al actualizar el password" } };
    }
};