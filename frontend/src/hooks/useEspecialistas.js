import { useState, useEffect } from 'react';

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000/api";

const useEspecialistas = () => {
    const [medicos, setMedicos] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const consultarAPI = async () => {
            try {
                const url = `${BASE_URL}/medicos/publicos`;
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