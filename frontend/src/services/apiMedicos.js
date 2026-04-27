export const registrarMedicoAPI = async datosMedicos => {
    try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/medicos`;
        const respuesta = await fetch(url, {
            method: 'Post',
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
        const url = `${import.meta.env.VITE_BACKEND_URL}/medicos/login`;
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
        console.log("Errir eb loginMedicoAPI:", error);
        return {
            ok: false,
            data: { msg: "Error de conexión con el servidor" }
        }
    }
}