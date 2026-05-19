import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000/api";

const useAgendar = () => {

    const HORARIOS_BASE = [
    '08:00', '09:00', '10:00', '11:00', '12:00', 
    '13:00', '14:00', '15:00', '16:00', '17:00', 
    '18:00', '19:00'
    ];

    const location = useLocation();
    const datosPrevios = location.state || {};

    const [especialidad, setEspecialidad] = useState(
    datosPrevios.especialidadElegida || datosPrevios.especialidadPrevia || ''
    );
    const [profesional, setProfesional] = useState(datosPrevios.profesionalPrevio || '');
    const [fecha, setFecha] = useState('');
    const [horario, setHorario] = useState('');
    
    const [nombre, setNombre] = useState('');
    const [dni, setDni] = useState('');
    const [email, setEmail] = useState('');

    const [medicos, setMedicos] = useState([]); 
    const [cargando, setCargando] = useState(false);
    const [enviado, setEnviado] = useState(false);
    const [error, setError] = useState('');

    const [horariosOcupados, setHorariosOcupados] = useState([]);
    const fechaMinima = new Date().toISOString().split('T')[0];

    const esFinDeSemana = (fechaSeleccionada) => {
        const fechaObj = new Date(`${fechaSeleccionada}T00:00:00`);
        const diaSemana = fechaObj.getDay();
        
        return diaSemana === 0 || diaSemana === 6;
    };

    const handleCambioFecha = nuevaFecha => {
        if (!nuevaFecha) {
            setFecha('');
            return;
        }

        if (esFinDeSemana(nuevaFecha)) {
            setError('Atención de Lunes a Viernes. Por favor, elige otro día');
            setFecha('');
            setHorario('');
            return;
        }

        setError('');
        setFecha(nuevaFecha);
        setHorario('');
    }

    useEffect(() => {
        if (especialidad === '') {
            setMedicos([]); 
            setProfesional('');
            return;
        }

        const consultarAPI = async() => {
            setCargando(true);
            setError('');

            try {
                const url = `${BASE_URL}/medicos/especialidad/${especialidad}`;
                const respuesta = await fetch(url);
                const resultado = await respuesta.json();

                if (resultado.length === 0) {
                    setError('No hay médicos disponibles para esta especialidad.');
                }
                
                setMedicos(resultado); 
                
            } catch (err) {
                console.log(err);
                setError('Error de conexión con el servidor.');
            } finally {
                setCargando(false);
            }
        };
        
        consultarAPI();
    }, [especialidad]);

    useEffect(() => {
        if (profesional && fecha) {
            const consultarDisponibilidad = async () => {
                try {
                    const url = `${BASE_URL}/turnos/ocupados/${profesional}/${fecha}`;
                    const respuesta = await fetch(url);
                    const resultado = await respuesta.json();
                    setHorariosOcupados(resultado);
                } catch (error) {
                    console.log("Error buscando disponibilidad", error);
                }
            };
            consultarDisponibilidad();
        } else {
            setHorariosOcupados([]);
        }
    }, [profesional, fecha]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if ([especialidad, profesional, fecha, horario, nombre, dni, email].includes('')) {
            setError('Todos los campos son obligatorios');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) {
            setError('El formato del email no es válido');
            return;
        }

        setError('');
        setCargando(true);

        try {
            const datosTurno = {
                medico: profesional,
                fecha,
                horario,
                paciente: { nombre, dni, email }
            };

            const url = `${BASE_URL}/turnos`;
            const respuesta = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datosTurno)
            });

            const resultado = await respuesta.json();

            if (respuesta.ok) {
                setEnviado(true);
                setEspecialidad('');
                setProfesional('');
                setFecha('');
                setHorario('');
                setNombre('');
                setDni('');
                setEmail('');
                setHorariosOcupados([]);

                window.history.replaceState({}, document.title);

                setTimeout(() => setEnviado(false), 4000);
            } else {
                setError(resultado.msg || 'Error al guardar el turno');
            }

        } catch (error) {
            console.log(error);
            setError('Error de conexión con el servidor al guardar el turno.');
        } finally {
            setCargando(false);
        }
    }

    return {
        especialidad, setEspecialidad,
        profesional, setProfesional,
        fecha, 
        handleCambioFecha,
        horario, setHorario,
        nombre, setNombre,
        dni, setDni,
        email, setEmail,
        medicos, 
        horariosBase: HORARIOS_BASE, 
        horariosOcupados,
        cargando,
        enviado,
        error,
        handleSubmit,
        fechaMinima
    };
};

export default useAgendar;