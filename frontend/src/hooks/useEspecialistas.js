import { useState, useEffect } from 'react';

const useEspecialistas = () => {
    const [medicos, setMedicos] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const consultarAPI = async () => {
            try {
                const url = `${import.meta.env.VITE_BACKEND_URL}/medicos/publicos`;
                const respuesta = await fetch(url);
                const resultado = await respuesta.json();

                setMedicos(resultado);
                
            } catch (error) {
                console.log("Error al cargar la lista de especialistas:", error);
            } finally {
                setCargando(false);
            }
        };

        consultarAPI();
    }, []);

    return {
        medicos,
        cargando
    };
};

export default useEspecialistas;