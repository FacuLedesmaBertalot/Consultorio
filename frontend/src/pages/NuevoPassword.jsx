import { Link } from 'react-router-dom';
import { useNuevoPassword } from '../hooks/useNuevoPassword';

const NuevoPassword = () => {
    const { 
        password, 
        setPassword, 
        tokenValido, 
        alerta, 
        passwordModificado, 
        cargando, 
        handleSubmit 
    } = useNuevoPassword();

    return (
        <div className="flex flex-col md:flex-row min-h-screen w-full bg-white">
            
            {/* SECCIÓN IZQUIERDA: Imagen y Branding (Mantenemos coherencia visual) */}
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

            {/* SECCIÓN DERECHA: Formulario */}
            <div className="w-full md:w-1/2 lg:w-2/5 xl:w-1/3 flex flex-col justify-center items-center p-6 z-10 bg-white">
                <div className="w-full max-w-md">
                    
                    <h2 className="text-3xl font-black text-slate-700 mb-6 uppercase text-center md:text-left">
                        Reestablece tu <span className="text-sky-600">Password</span>
                    </h2>

                    {/* Estado de Carga */}
                    {cargando && (
                        <div className="text-sky-600 font-bold animate-pulse text-lg my-8 text-center">
                            Validando token de seguridad... ⏳
                        </div>
                    )}

                    {/* Alertas de Feedback */}
                    {!cargando && alerta.msg && (
                        <div className={`p-5 mb-8 rounded-2xl shadow-sm text-center font-bold text-lg 
                            ${alerta.error ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-green-50 text-green-600 border border-green-100'}`}>
                            {alerta.msg}
                        </div>
                    )}

                    {/* Formulario: Solo se muestra si el token es válido y no se ha modificado aún */}
                    {tokenValido && !passwordModificado && (
                        <form 
                            onSubmit={handleSubmit}
                            className="bg-white shadow-xl rounded-3xl p-8 border border-slate-100"
                        >
                            <div className="mb-6">
                                <label className="uppercase text-slate-600 block text-sm font-bold mb-2 ml-1">
                                    Nuevo Password
                                </label>
                                <input 
                                    type="password"
                                    placeholder="Escribí tu nueva contraseña"
                                    className="border-2 w-full p-4 bg-gray-50 rounded-2xl focus:ring-4 focus:ring-sky-500/20 focus:border-sky-500 outline-none transition-all"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <p className="text-xs text-slate-400 mt-2 ml-1">Mínimo 6 caracteres.</p>
                            </div>

                            <button 
                                type="submit"
                                className="w-full bg-sky-700 hover:bg-sky-800 text-white font-bold py-4 rounded-2xl transition-all uppercase tracking-widest shadow-lg shadow-sky-200 active:scale-95"
                            >
                                Guardar Nueva Contraseña
                            </button>
                        </form>
                    )}

                    {/* Link de retorno cuando hay éxito */}
                    {passwordModificado && (
                        <Link 
                            to="/login"
                            className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-2xl transition-colors uppercase tracking-widest shadow-md text-center"
                        >
                            Iniciar Sesión
                        </Link>
                    )}

                    {/* Link de retorno cuando hay error o para cancelar */}
                    {!cargando && alerta.error && (
                        <div className="mt-10 text-center">
                            <Link 
                                to="/login"
                                className="text-slate-500 hover:text-sky-700 font-medium transition-colors border-b border-transparent hover:border-sky-700 pb-1"
                            >
                                &larr; Volver al Login
                            </Link>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default NuevoPassword;