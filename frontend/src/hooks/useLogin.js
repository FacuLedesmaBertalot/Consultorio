import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginMedicoAPI } from '../services/apiMedicos';

export const useLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alerta, setAlerta] = useState({ msg: '', error: false });
    const [cargando, setCargando] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();

        if ([email, password].includes('')) {
            setAlerta({ msg: 'Todos los campos son obligatorios', error: true });
            return;
        }

        setCargando(true);
        setAlerta({});

        const { ok, data } = await loginMedicoAPI({ email, password });

        if (ok) {
            localStorage.setItem('token', data.token);
            navigate('/admin');
        } else {
            setAlerta({ msg: data.msg, error: true });
        }
        
        setCargando(false);
    }

    return {
        email,
        setEmail,
        password,
        setPassword,
        alerta,
        cargando,
        handleSubmit
    };
};