import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { obtenerDatosAdmin, eliminarTurnoAPI } from "../services/adminService";

export const useAdminData = () => {
    const [perfil, setPerfil] = useState({});
    const [turnos, setTurnos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [filtroFecha, setFiltroFecha] = useState(new Date().toISOString().split('T')[0]);
    const [turnoAEliminar, setTurnoAEliminar] = useState(null); 
    
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

    const pedirConfirmacion = (id) => {
        setTurnoAEliminar(id); 
    };

    const cancelarEliminacion = () => {
        setTurnoAEliminar(null); 
    };

    const confirmarEliminacion = async () => {
        if (!turnoAEliminar) return;

        try {
            const token = localStorage.getItem('token');
            await eliminarTurnoAPI(turnoAEliminar, token);
            
            const turnosActualizados = turnos.filter(turno => turno._id !== turnoAEliminar);
            setTurnos(turnosActualizados);
        } catch (error) {
            console.error(error);
            alert('Hubo un error al intentar eliminar el turno.');
        } finally {
            setTurnoAEliminar(null);
        }
    };

    const turnosAMostrar = filtroFecha ? turnos.filter(t => t.fecha === filtroFecha) : turnos;

    return { 
        perfil, 
        setPerfil,
        turnos, 
        turnosAMostrar, 
        cargando, 
        filtroFecha, 
        setFiltroFecha,
        turnoAEliminar,
        pedirConfirmacion,
        cancelarEliminacion,
        confirmarEliminacion
    };
}