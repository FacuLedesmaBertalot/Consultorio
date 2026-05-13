import { useState } from 'react';
import { registrarMedicoAPI } from '../services/apiMedicos';

export const useRegistrar = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repetirPassword, setRepetirPassword] = useState('');
    const [matricula, setMatricula] = useState('');
    const [especialidad, setEspecialidad] = useState('');

    const [alerta, setAlerta] = useState({ msg: '', error: false });
    const [cargando, setCargando] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if ([nombre, email, password, repetirPassword, matricula, especialidad].includes('')) {
            setAlerta({ msg: 'Todos los campos son obligatorios', error: true });
            return;
        }
        if (password !== repetirPassword) {
            setAlerta({ msg: 'Los passwords no son iguales', error: true });
            return;
        }
        if (password.length < 6) {
            setAlerta({ msg: 'El password es muy corto, agrega mínimo 6 caracteres', error: true });
            return;
        }

        setAlerta({ msg: '', error: false });
        setCargando(true);

        const { ok, data } = await registrarMedicoAPI({ 
            nombre, email, password, matricula, especialidad 
        });

        if (ok) {
            setAlerta({ msg: 'Creado correctamente, revisa tu email para confirmar tu cuenta', error: false });
            setNombre('');
            setEmail('');
            setPassword('');
            setRepetirPassword('');
            setMatricula('');
            setEspecialidad('');
        } else {
            setAlerta({ msg: data.msg || 'Hubo un error en el registro', error: true });
        }

        setCargando(false);
    };

    return {
        nombre, setNombre,
        email, setEmail,
        password, setPassword,
        repetirPassword, setRepetirPassword,
        matricula, setMatricula,
        especialidad, setEspecialidad,
        alerta,
        cargando,
        handleSubmit
    };
};