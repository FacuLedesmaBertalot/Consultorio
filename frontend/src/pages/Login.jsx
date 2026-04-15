import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden">
            
            {/* Lado Izquierdo: Imagen con difuminado */}
            <div 
                className="hidden md:block md:w-1/2 lg:w-2/3 bg-cover bg-center relative"
                style={{ 
                    backgroundImage: "url('/dra.webp')" 
                }}
            >
                {/* Gradiente de transparente a blanco para fundirse con el form */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-white"></div>
                
                <div className="absolute inset-0 flex items-center justify-center p-10">
                    <h1 className="text-indigo-600 font-black text-6xl lg:text-8xl text-center drop-shadow-2xl">
                        APV - <span className="text-black">Admin</span>
                    </h1>
                </div>
            </div>

            {/* Lado Derecho: Formulario */}
            <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center items-center bg-white p-10">
                <div className="w-full max-w-md">
                    <h2 className="text-indigo-600 font-black text-4xl mb-10 text-center md:hidden">
                        Inicia Sesión
                    </h2>

                    <form className="bg-white shadow-2xl rounded-2xl p-8 border border-gray-100">
                        <div className="my-5">
                            <label className="uppercase text-gray-600 block text-sm font-bold">Email</label>
                            <input 
                                type="email" 
                                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" 
                                placeholder="Email de Registro"
                            />
                        </div>
                        <div className="my-5">
                            <label className="uppercase text-gray-600 block text-sm font-bold">Password</label>
                            <input 
                                type="password" 
                                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" 
                                placeholder="Tu Password"
                            />
                        </div>
                        <input 
                            type="submit" 
                            value="Entrar al Panel" 
                            className="bg-indigo-700 w-full py-3 rounded-xl text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors"
                        />
                    </form>

                    <nav className="mt-10 flex flex-col items-center gap-2">
                        <Link className="text-gray-500 text-sm hover:text-indigo-600" to="/registrar">¿No tienes cuenta? Regístrate</Link>
                        <Link className="text-gray-500 text-sm hover:text-indigo-600" to="/olvide-password">Olvidé mi Password</Link>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Login;