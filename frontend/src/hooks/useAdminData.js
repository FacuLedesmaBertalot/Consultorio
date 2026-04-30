import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { obtenerDatosAdmin } from "../services/adminService";

export const useAdminData = () => {
    const [perfil, setPerfil] = useState({});
    const [turnos, setTurnos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [filtroFecha, setFiltroFecha] = useState(new Date().toISOString().split('T')[0]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            if (!token) return navigate ('/login');

            try {
                const { perfil, turnos } = await obtenerDatosAdmin(token);
                setPerfil(perfil);
                setTurnos(turnos);
            } catch (error) {
                console.error(error);
            }
            finally {
                setCargando(false);
            }
        };
        fetchData();
    }, [navigate]);

    const turnosAMostrar = filtroFecha ? turnos.filter(t => t.fecha === filtroFecha) : turnos;

    return { perfil, turnos, turnosAMostrar, cargando, filtroFecha, setFiltroFecha };
}