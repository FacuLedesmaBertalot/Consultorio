import { useState, useEffect } from 'react';

const useAgendar = () => {

    const HORARIOS_BASE = [
    '08:00', '09:00', '10:00', '11:00', '12:00', 
    '13:00', '14:00', '15:00', '16:00', '17:00', 
    '18:00', '19:00'
    ];

    const [especialidad, setEspecialidad] = useState('');
    const [profesional, setProfesional] = useState('');
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
                const url = `http://localhost:4000/api/medicos/especialidad/${especialidad}`;
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

    const handleSubmit = e => {
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
        setEnviado(true);
        
        console.log("Enviando turno...", {
            especialidad,
            medicoId: profesional,
            fecha,
            horario,
            paciente: { nombre, dni }
        });

        setTimeout(() => setEnviado(false), 4000);
    }

    return {
        especialidad, setEspecialidad,
        profesional, setProfesional,
        fecha, setFecha,
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
        handleSubmit
    };
};

export default useAgendar;