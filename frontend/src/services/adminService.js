const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const obtenerDatosAdmin = async (token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    };

    const [resPerfil, resTurnos] = await Promise.all([
        fetch(`${VITE_BACKEND_URL}/medicos/perfil`, config),
        fetch(`${VITE_BACKEND_URL}/turnos`, config) 
    ]);

    if (!resPerfil.ok || !resTurnos.ok) throw new Error('Error al obtener los datos');

    return {
        perfil: await resPerfil.json(),
        turnos: await resTurnos.json()
    };
};