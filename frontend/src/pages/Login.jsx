import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen w-full bg-white">
            
            <div 
                className="w-full h-[35vh] sm:h-[40vh] md:h-auto md:w-1/2 lg:w-3/5 xl:w-2/3 bg-cover bg-center relative shrink-0"
                style={{ 
                    backgroundImage: "url('/loginDoctors.jpg')" 
                }}
            >

                <div className="absolute inset-0 bg-linear-to-r from-white/10 via-white/60 to-white"></div>
                
                {/* TÍTULO EN MÓVIL (Anclado al fondo y centrado) */}
                <div className="md:hidden absolute inset-x-0 bottom-6 flex flex-col items-center justify-end z-10">
                    <div className="text-center">
                        <h1 className="text-4xl font-black text-sky-800 drop-shadow-md mb-1">
                            Vitae<span className="text-orange-600">Salud</span>
                        </h1>
                        <h2 className="text-slate-800 font-bold uppercase tracking-widest text-[10px] bg-white/70 backdrop-blur-sm shadow-sm py-1 px-4 rounded-full inline-block">
                            Panel de Administración
                        </h2>
                    </div>
                </div>

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

            <div className="w-full md:w-1/2 lg:w-2/5 xl:w-1/3 flex flex-col justify-center items-center p-2 sm:p-4 lg:p-6 z-10 bg-white">
                <div className="w-full max-w-sm mt-4 md:mt-0">
                    
                    <form>
                        <div className="my-4">
                            <label className="uppercase text-slate-700 block text-xs font-bold tracking-wide">
                                Email
                            </label>
                            <input 
                                type="email" 
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
                                className="border border-slate-200 w-full p-3 mt-2 bg-slate-50 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition-all shadow-sm" 
                                placeholder="Tu Contraseña"
                            />
                        </div>
                        <input 
                            type="submit" 
                            value="Entrar al Panel" 
                            className="bg-sky-600 w-full py-3 mt-5 rounded-xl text-white uppercase font-bold hover:bg-sky-700 cursor-pointer transition-colors shadow-lg shadow-sky-200"
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
    )
}

export default Login;