import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
    const { 
        email, 
        setEmail, 
        password, 
        setPassword, 
        alerta, 
        cargando, 
        handleSubmit 
    } = useLogin();

    return (
        <div className="flex flex-col md:flex-row min-h-screen w-full bg-white">
            
            <div 
                className="w-full h-[25vh] md:h-auto md:w-1/2 lg:w-3/5 xl:w-2/3 bg-cover bg-center relative shrink-0"
                style={{ backgroundImage: "url('/loginDoctors.jpg')" }}
            >
                <div className="absolute inset-0 bg-linear-to-b md:bg-linear-to-r from-white/10 via-white/60 to-white"></div>
                
                <div className="hidden md:flex absolute inset-0 items-center justify-center p-10 z-10">
                    <div className="text-center">
                        <h1 className="text-5xl lg:text-7xl font-black text-sky-700 drop-shadow-xl mb-4">
                            Vitae<span className="text-orange-600">Salud</span>
                        </h1>
                        <h2 className="text-slate-700 font-bold uppercase tracking-widest lg:text-xl drop-shadow-md bg-white/50 rounded-full px-6 py-2 backdrop-blur-sm">
                            Panel de Administración
                        </h2>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-2/5 xl:w-1/3 flex flex-col justify-center items-center p-6 z-10 bg-white">
                <div className="w-full max-w-sm">

                    <div className="md:hidden text-center mb-8">
                        <h1 className="text-5xl font-black text-sky-800 mb-1">
                            Vitae<span className="text-orange-600">Salud</span>
                        </h1>
                        <h2 className="text-slate-500 font-bold uppercase tracking-widest text-xs">
                            Panel de Administración
                        </h2>
                    </div>
                    
                    {alerta.msg && (
                        <div className={`p-3 mb-4 rounded-xl font-bold text-center text-sm ${alerta.error ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                            {alerta.msg}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="my-4">
                            <label className="uppercase text-slate-700 block text-xs font-bold tracking-wide">
                                Email
                            </label>
                            <input 
                                type="email" 
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="border border-slate-200 w-full p-3 mt-2 bg-slate-50 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition-all shadow-sm" 
                                placeholder="Email de Registro"
                            />
                        </div>
                        <div className="my-5">
                            <label className="uppercase text-slate-700 block text-xs font-bold tracking-wide">
                                Password
                            </label>
                            <input 
                                type="password" 
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className="border border-slate-200 w-full p-3 mt-2 bg-slate-50 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition-all shadow-sm" 
                                placeholder="Tu Contraseña"
                            />
                        </div>
                        <input 
                            type="submit" 
                            disabled={cargando}
                            value={cargando ? "Verificando..." : "Entrar al Panel"} 
                            className={`w-full py-3 mt-5 rounded-xl text-white uppercase font-bold transition-colors shadow-lg shadow-sky-200 
                                ${cargando ? 'bg-slate-400 cursor-not-allowed' : 'bg-sky-600 hover:bg-sky-700 cursor-pointer'}`}
                        />
                    </form>

                    <nav className="mt-8 flex flex-col items-center gap-3 border-t border-slate-100 pt-6">
                        <Link className="text-slate-500 text-sm hover:text-sky-700 font-medium transition-colors" to="/registrar">
                            ¿No tienes cuenta? Regístrate
                        </Link>
                        <Link className="text-slate-500 text-sm hover:text-sky-700 font-medium transition-colors" to="/olvide-password">
                            Olvidé mi Contraseña
                        </Link>
                        <Link className="text-orange-500 text-xs hover:text-orange-600 font-bold mt-4 transition-colors uppercase tracking-widest" to="/">
                            &larr; Volver al inicio
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Login;