import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { confirmarCuentaAPI } from '../services/apiMedicos';

export const useConfirmarCuenta = () => {
    const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
    const [cargando, setCargando] = useState(true);
    const [alerta, setAlerta] = useState({ msg: '', error: false });

    const params = useParams();
    const { id } = params;

    const llamado = useRef(false);

    useEffect(() => {
        if (llamado.current) return;
        llamado.current = true;

        const confirmarCuenta = async () => {
            const { ok, data } = await confirmarCuentaAPI(id);

            if (ok) {
                setCuentaConfirmada(true);
                setAlerta({ msg: data.msg || 'Cuenta confirmada correctamente', error: false });
            } else {
                setAlerta({ msg: data.msg || 'Error al confirmar la cuenta', error: true });
            }
            setCargando(false);
        };
        
        confirmarCuenta();
    }, [id]);

    return {
        cuentaConfirmada,
        cargando,
        alerta
    };
};