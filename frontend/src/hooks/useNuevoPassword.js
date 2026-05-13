import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { comprobarTokenAPI, nuevoPasswordAPI } from '../services/apiMedicos';

export const useNuevoPassword = () => {
    const [password, setPassword] = useState('');
    const [tokenValido, setTokenValido] = useState(false);
    const [alerta, setAlerta] = useState({});
    const [passwordModificado, setPasswordModificado] = useState(false);
    const [cargando, setCargando] = useState(true);

    const params = useParams();
    const { token } = params;

    const llamado = useRef(false);

    useEffect(() => {
        if (llamado.current) return;
        llamado.current = true;

        const comprobarToken = async () => {
            const { ok, data } = await comprobarTokenAPI(token);

            if (ok) {
                setTokenValido(true);
            } else {
                setAlerta({ msg: data.msg, error: true });
            }
            setCargando(false);
        };
        comprobarToken();
    }, [token]); 

    const handleSubmit = async e => {
        e.preventDefault();

        if (password.length < 6) {
            setAlerta({ msg: 'La Contraseña es muy Corta, agrega mínimo 6 caracteres', error: true });
            return;
        }

        try {
            const { ok, data } = await nuevoPasswordAPI(token, password);

            if (ok) {
                setAlerta({ msg: data.msg, error: false });
                setPasswordModificado(true);
            } else {
                setAlerta({ msg: data.msg, error: true });
            }
        } catch (error) {
            setAlerta({ msg: 'Error al actualizar', error: true });
        }
    };

    return {
        password,
        setPassword,
        tokenValido,
        alerta,
        passwordModificado,
        cargando,
        handleSubmit
    };
};