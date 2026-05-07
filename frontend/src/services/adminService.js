
const URL_BASE = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000/api";

export const obtenerDatosAdmin = async (token) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    };

    const [resPerfil, resTurnos] = await Promise.all([
        fetch(`${URL_BASE}/medicos/perfil`, config),
        fetch(`${URL_BASE}/turnos`, config)         
    ]);

    if (!resPerfil.ok || !resTurnos.ok) throw new Error('Error al obtener los datos');

    return {
        perfil: await resPerfil.json(),
        turnos: await resTurnos.json()
    };
};

export const eliminarTurnoAPI = async (id, token) => {
    const config = {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const respuesta = await fetch(`${URL_BASE}/turnos/${id}`, config);
    if (!respuesta.ok) throw new Error('Error al eliminar el turno');
    
    return await respuesta.json();
};

export const actualizarPerfilAPI = async (id, datosFormulario, token) => {
    
    console.log("Haciendo PUT a:", `${URL_BASE}/medicos/perfil/${id}`);

    const config = {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: datosFormulario
    };

    const respuesta = await fetch(`${URL_BASE}/medicos/perfil/${id}`, config);
    
    if (!respuesta.ok) {
        const errorData = await respuesta.json().catch(() => ({ msg: 'Error de conexión o ruta no encontrada' }));
        throw new Error(errorData.msg || 'Error al actualizar perfil');
    }

    return await respuesta.json();
};