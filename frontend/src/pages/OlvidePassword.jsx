import { useState } from 'react';
import { Link } from 'react-router-dom';
import { olvidePasswordAPI } from '../services/apiMedicos';

const OlvidePassword = () => {
    const [email, setEmail] = useState('');
    const [alerta, setAlerta] = useState({ msg: '', error: false });
    const [cargando, setCargando] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email === '' || email.length < 6) {
            setAlerta({ msg: 'El email es obligatorio', error: true });
            return;
        }

        setAlerta({ msg: '', error: false });
        setCargando(true);

        // Llamada a la API
        const { ok, data } = await olvidePasswordAPI({ email });

        if (ok) {
            setAlerta({ 
                msg: data.msg || 'Hemos enviado un email con las instrucciones', 
                error: false 
            });
            setEmail('');
        } else {
            setAlerta({ 
                msg: data.msg || 'El usuario no existe o hubo un error', 
                error: true 
            });
        }

        setCargando(false);
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen w-full bg-white">
            
            {/* LADO IZQUIERDO: IMAGEN (Idéntico a Registrar) */}
            <div 
                className="w-full h-[35vh] sm:h-[40vh] md:h-auto md:w-1/2 lg:w-3/5 xl:w-2/3 bg-cover bg-center relative shrink-0"
                style={{ backgroundImage: "url('/loginDoctors.jpg')" }}
            >
                <div className="absolute inset-0 bg-linear-to-r from-white/10 via-white/60 to-white"></div>
                
                <div className="hidden md:flex absolute inset-0 items-center justify-center p-10 z-10">
                    <div className="text-center">
                        <h1 className="text-5xl lg:text-7xl font-black text-sky-700 drop-shadow-xl mb-4">
                            Vitae<span className="text-orange-600">Salud</span>
                        </h1>
                        <h2 className="text-slate-700 font-bold uppercase tracking-widest lg:text-xl drop-shadow-md bg-white/50 rounded-full px-6 py-2 backdrop-blur-sm">
                            Recuperación de Acceso
                        </h2>
                    </div>
                </div>
            </div>

            {/* LADO DERECHO: FORMULARIO */}
            <div className="w-full md:w-1/2 lg:w-2/5 xl:w-1/3 flex flex-col justify-center items-center p-4 lg:p-6 z-10 bg-white">
                <div className="w-full max-w-sm">
                    
                    <h2 className="text-3xl font-black text-slate-700 mb-2 uppercase">
                        Recupera tu <span className="text-sky-600">Acceso</span>
                    </h2>
                    <p className="text-slate-500 mb-6 font-medium">No pierdas tus turnos, restablece tu cuenta.</p>

                    {alerta.msg && (
                        <div className={`p-4 mb-4 text-center text-sm font-bold rounded-xl ${alerta.error ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-green-50 text-green-600 border border-green-100'}`}>
                            {alerta.msg}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="my-5">
                            <label className="uppercase text-slate-700 block text-xs font-bold tracking-wide">Email de Registro</label>
                            <input 
                                type="email" 
                                value={email} 
                                onChange={e => setEmail(e.target.value)}
                                className="border border-slate-200 w-full p-3 mt-2 bg-slate-50 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition-all shadow-sm" 
                                placeholder="Tu Email"
                            />
                        </div>

                        <input 
                            type="submit" 
                            disabled={cargando}
                            value={cargando ? "Enviando..." : "Enviar Instrucciones"} 
                            className={`w-full py-3 mt-4 rounded-xl text-white uppercase font-bold transition-colors shadow-lg 
                                ${cargando ? 'bg-slate-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600 cursor-pointer shadow-orange-200'}`}
                        />
                    </form>

                    <nav className="mt-8 flex flex-col items-center gap-3 border-t border-slate-100 pt-6">
                        <Link className="text-slate-500 text-sm hover:text-sky-700 font-medium transition-colors" to="/login">
                            ¿Ya tienes una cuenta? Inicia Sesión
                        </Link>
                        <Link className="text-slate-500 text-sm hover:text-sky-700 font-medium transition-colors" to="/registrar">
                            ¿No tienes una cuenta? Regístrate
                        </Link>
                    </nav>
                </div>
            </div>

        </div>
    );
};

export default OlvidePassword;