import { useState } from 'react';
import { Link } from 'react-router-dom';
import { registrarMedicoAPI } from '../services/apiMedicos';

const Registrar = () => {
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

    return (
        <div className="flex flex-col md:flex-row min-h-screen w-full bg-white">
            
            {/* LADO IZQUIERDO: IMAGEN */}
            <div 
                className="w-full h-[35vh] sm:h-[40vh] md:h-auto md:w-1/2 lg:w-3/5 xl:w-2/3 bg-cover bg-center relative shrink-0"
                style={{ backgroundImage: "url('/loginDoctors.jpg')" }}
            >
                <div className="absolute inset-0 bg-linear-to-r from-white/10 via-white/60 to-white"></div>
                
                <div className="md:hidden absolute inset-x-0 bottom-6 flex flex-col items-center justify-end z-10">
                    <div className="text-center">
                        <h1 className="text-4xl font-black text-sky-800 drop-shadow-md mb-1">
                            Vitae<span className="text-orange-600">Salud</span>
                        </h1>
                        <h2 className="text-slate-800 font-bold uppercase tracking-widest text-[10px] bg-white/70 backdrop-blur-sm shadow-sm py-1 px-4 rounded-full inline-block">
                            Registro de Profesionales
                        </h2>
                    </div>
                </div>

                <div className="hidden md:flex absolute inset-0 items-center justify-center p-10 z-10">
                    <div className="text-center">
                        <h1 className="text-5xl lg:text-7xl font-black text-sky-700 drop-shadow-xl mb-4">
                            Vitae<span className="text-orange-600">Salud</span>
                        </h1>
                        <h2 className="text-slate-700 font-bold uppercase tracking-widest lg:text-xl drop-shadow-md bg-white/50 rounded-full px-6 py-2 backdrop-blur-sm">
                            Registro de Profesionales
                        </h2>
                    </div>
                </div>
            </div>

            {/* LADO DERECHO: FORMULARIO */}
            <div className="w-full md:w-1/2 lg:w-2/5 xl:w-1/3 flex flex-col justify-center items-center p-4 lg:p-6 z-10 bg-white overflow-y-auto">
                <div className="w-full max-w-sm mt-4 md:mt-0">
                    
                    {alerta.msg && (
                        <div className={`p-4 mb-4 text-center text-sm font-bold rounded-xl ${alerta.error ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-green-50 text-green-600 border border-green-100'}`}>
                            {alerta.msg}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="my-3">
                            <label className="uppercase text-slate-700 block text-xs font-bold tracking-wide">Nombre Completo</label>
                            <input 
                                type="text" value={nombre} onChange={e => setNombre(e.target.value)}
                                className="border border-slate-200 w-full p-2.5 mt-1 bg-slate-50 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition-all shadow-sm" 
                                placeholder="Ej: Dr. Juan Pérez"
                            />
                        </div>

                        <div className="my-3">
                            <label className="uppercase text-slate-700 block text-xs font-bold tracking-wide">Email</label>
                            <input 
                                type="email" value={email} onChange={e => setEmail(e.target.value)}
                                className="border border-slate-200 w-full p-2.5 mt-1 bg-slate-50 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition-all shadow-sm" 
                                placeholder="Tu Email"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="my-3">
                                <label className="uppercase text-slate-700 block text-xs font-bold tracking-wide">Matrícula</label>
                                <input 
                                    type="text" value={matricula} onChange={e => setMatricula(e.target.value)}
                                    className="border border-slate-200 w-full p-2.5 mt-1 bg-slate-50 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition-all shadow-sm" 
                                    placeholder="MN-1234"
                                />
                            </div>

                            <div className="my-3">
                                <label className="uppercase text-slate-700 block text-xs font-bold tracking-wide">Especialidad</label>
                                <select 
                                    value={especialidad} onChange={e => setEspecialidad(e.target.value)}
                                    className="border border-slate-200 w-full p-2.5 mt-1 bg-slate-50 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition-all shadow-sm text-slate-500"
                                >
                                    <option value="">-- Elige --</option>
                                    <option value="clinica">Clínica Médica</option>
                                    <option value="pediatria">Pediatría</option>
                                    <option value="cardiologia">Cardiología</option>
                                    <option value="dermatologia">Dermatología</option>
                                    <option value="ginecologia">Ginecología</option>
                                    <option value="traumatologia">Traumatología</option>
                                    <option value="oftalmologia">Oftalmología</option>
                                    <option value="nutricion">Nutrición</option>
                                </select>
                            </div>
                        </div>

                        <div className="my-3">
                            <label className="uppercase text-slate-700 block text-xs font-bold tracking-wide">Password</label>
                            <input 
                                type="password" value={password} onChange={e => setPassword(e.target.value)}
                                className="border border-slate-200 w-full p-2.5 mt-1 bg-slate-50 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition-all shadow-sm" 
                                placeholder="Mínimo 6 caracteres"
                            />
                        </div>

                        <div className="my-3">
                            <label className="uppercase text-slate-700 block text-xs font-bold tracking-wide">Repetir Password</label>
                            <input 
                                type="password" value={repetirPassword} onChange={e => setRepetirPassword(e.target.value)}
                                className="border border-slate-200 w-full p-2.5 mt-1 bg-slate-50 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition-all shadow-sm" 
                                placeholder="Repite tu Password"
                            />
                        </div>

                        <input 
                            type="submit" 
                            disabled={cargando}
                            value={cargando ? "Registrando..." : "Crear Cuenta"} 
                            className={`w-full py-3 mt-4 rounded-xl text-white uppercase font-bold transition-colors shadow-lg 
                                ${cargando ? 'bg-slate-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600 cursor-pointer shadow-orange-200'}`}
                        />
                    </form>

                    <nav className="mt-6 flex flex-col items-center gap-3 border-t border-slate-100 pt-5">
                        <Link className="text-slate-500 text-sm hover:text-sky-700 font-medium transition-colors" to="/login">
                            ¿Ya tienes una cuenta? Inicia Sesión
                        </Link>
                        <Link className="text-slate-500 text-sm hover:text-sky-700 font-medium transition-colors" to="/olvide-password">
                            Olvidé mi Contraseña
                        </Link>
                    </nav>
                </div>
            </div>

        </div>
    );
};

export default Registrar;