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