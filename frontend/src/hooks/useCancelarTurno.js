import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { cancelarTurnoAPI } from '../services/turnoService';

export const useCancelarTurno = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');

    const [estado, setEstado] = useState('idle');
    
    const [errorMsg, setErrorMsg] = useState(''); 

    const handleConfirmarCancelacion = async () => {
        if (!token) {
            setEstado('error');
            setErrorMsg('No se proporcionó un código de cancelación válido.');
            return;
        }

        setEstado('loading');
        try {
            await cancelarTurnoAPI(token);
            setEstado('success');
        } catch (error) {
            setEstado('error');
            setErrorMsg(error.message);
        }
    };

    return {
        token,
        estado,
        errorMsg,
        handleConfirmarCancelacion
    };
};