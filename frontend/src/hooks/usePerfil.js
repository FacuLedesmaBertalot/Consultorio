import { useState, useEffect } from 'react';
import { actualizarPerfilAPI } from '../services/adminService';

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000/api";

export const usePerfil = (perfilActual, setPerfil) => {
    const [datos, setDatos] = useState({
        nombre: '',
        email: '',
        telefono: '',
        especialidad: ''
    });

    const [imagenAux, setImagenAux] = useState(null);
    const [preview, setPreview] = useState('');
    const [mensaje, setMensaje] = useState({tipo: '', texto: '' });
    const [cargando, setCargando] = useState(false);


    useEffect(() => {
        if (perfilActual?._id) {
            setDatos({
                nombre: perfilActual.nombre || '',
                email: perfilActual.email || '',
                telefono: perfilActual.telefono || '',
                especialidad: perfilActual.especialidad || ''
            });
            setPreview(perfilActual.imagen || '' );
        }
    }, [perfilActual]);

    const handleInputChange = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        });
    };

    const handleImageChange = e => {
        const file = e.target.files[0];
        if (file) {
            setImagenAux(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setCargando(true);
        setMensaje({ tipo: '', texto: '' });

        try {
            const formData = new FormData();
            formData.append('nombre', datos.nombre);
            formData.append('email', datos.email);
            formData.append('telefono', datos.telefono);
            formData.append('especialidad', datos.especialidad);

            if (imagenAux) {
                formData.append('imagen', imagenAux);
            }

            const token = localStorage.getItem('token');
            
            console.log("Enviando a:", `${BASE_URL}/medicos/perfil/${perfilActual._id}`);
            
            const actualizado = await actualizarPerfilAPI(perfilActual._id, formData, token);

            setMensaje({ tipo: 'exito', texto: '¡Perfil Actualizado Correctamente!' });

            if (setPerfil) setPerfil(actualizado);

        } catch (error) {
            setMensaje({ tipo: 'error', texto: error.message });
        } finally {
            setCargando(false);
            setTimeout(() => setMensaje({ tipo: '', texto: '' }), 4000);
        }
    };

    return {
        datos,
        preview,
        mensaje,
        cargando,
        handleInputChange,
        handleImageChange,
        handleSubmit
    };
};