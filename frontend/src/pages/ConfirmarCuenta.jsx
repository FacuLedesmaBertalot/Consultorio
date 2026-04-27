import { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';

const ConfirmarCuenta = () => {

    const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
    const [cargando, setCargand] = useState(true);
    const [alerta, setAlerta] = useState({ msg: '', error: false });

    const params = useParams();
    const { id } = params;

    const llamado = useRef(false);

    useEffect(() => {
        if (llamado.current) return;
        llamado.current = true;

        const confirmarCuenta = async () => {
            try {
                const url = `${import.meta.env.VITE_BACKEND_URL}/medicos/confirmar/${id}`;
                const respuesta = await fetch(url);
                const resultado = await respuesta.json();

                if (respuesta.ok) {
                    setCuentaConfirmada(true);
                    setAlerta({ msg: resultado.msg || 'Cuenta confirmada correctamente', error: false });
                } else {
                    setAlerta({ msg: resultado.msg || 'Error al confirmar la cuenta', error: true });
                }
            } catch (error) {
                console.log(error);
                setAlerta({ msg: 'Error de conexión con el servidor', error: true });
            } finally {
                setCargando(false);
            }
        };
        confirmarCuenta();
    }, [id]);

    return (
        <div className="flex flex-col md:flex-row min-h-screen w-full bg-white">
            
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
                            Confirmación de Cuenta
                        </h2>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-2/5 xl:w-1/3 flex flex-col justify-center items-center p-6 z-10 bg-white">
                <div className="w-full max-w-md text-center">
                    
                    <h2 className="text-3xl font-black text-slate-700 mb-6 uppercase">
                        Confirma tu Cuenta
                    </h2>

                    {cargando && (
                        <div className="text-sky-600 font-bold animate-pulse text-lg my-8">
                            Verificando datos en el servidor... ⏳
                        </div>
                    )}

                    {!cargando && alerta.msg && (
                        <div className={`p-5 mb-8 rounded-2xl shadow-sm text-center font-bold text-lg 
                            ${alerta.error ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-green-50 text-green-600 border border-green-100'}`}>
                            {alerta.msg}
                        </div>
                    )}

                    {cuentaConfirmada && (
                        <Link 
                            to="/login"
                            className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-colors uppercase tracking-widest shadow-md"
                        >
                            Iniciar Sesión Ahora
                        </Link>
                    )}

                    {!cargando && alerta.error && (
                        <Link 
                            to="/login"
                            className="text-slate-500 hover:text-sky-700 font-medium transition-colors border-b border-transparent hover:border-sky-700 pb-1"
                        >
                            &larr; Volver a Iniciar Sesión
                        </Link>
                    )}

                </div>
            </div>
        </div>
    );
}

export default ConfirmarCuenta;