import { Link } from 'react-router-dom';
import { useCancelarTurno } from '../hooks/useCancelarTurno';

const CancelarTurno = () => {
    const { estado, errorMsg, handleConfirmarCancelacion } = useCancelarTurno();

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/80 p-8 md:p-10 text-center relative overflow-hidden">
                
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100/40 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>

                {estado === 'idle' && (
                    <div>
                        <div className="w-16 h-16 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-orange-100">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-black text-slate-800 mb-3 tracking-tight">¿Confirmás la cancelación?</h2>
                        <p className="text-slate-500 mb-8 leading-relaxed">
                            Al confirmar, tu turno en <span className="font-bold text-sky-700">VitaeSalud</span> se dará de baja inmediatamente y el horario quedará libre para otro paciente.
                        </p>
                        <div className="flex flex-col gap-3">
                            <button
                                onClick={handleConfirmarCancelacion}
                                className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-orange-600 active:scale-98 transition-all cursor-pointer shadow-lg shadow-slate-200"
                            >
                                Sí, cancelar turno
                            </button>
                            <Link 
                                to="/" 
                                className="w-full text-slate-400 py-3 rounded-xl font-bold text-sm hover:text-slate-600 transition-colors cursor-pointer"
                            >
                                Volver al inicio
                            </Link>
                        </div>
                    </div>
                )}

                {estado === 'loading' && (
                    <div className="py-8">
                        <div className="w-12 h-12 border-4 border-sky-600 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                        <h2 className="text-xl font-bold text-slate-800 mb-2">Procesando baja</h2>
                        <p className="text-slate-400 text-sm">Estamos cancelando tu cita médica, aguardá un momento...</p>
                    </div>
                )}

                {estado === 'success' && (
                    <div>
                        <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-emerald-100">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-black text-slate-800 mb-3 tracking-tight">Turno cancelado</h2>
                        <p className="text-slate-500 mb-8 leading-relaxed">
                            Tu cita fue dada de baja con éxito. Te enviamos un correo electrónico confirmando la cancelación.
                        </p>
                        <Link
                            to="/"
                            className="inline-block bg-sky-700 text-white px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-sky-800 transition-all cursor-pointer shadow-md shadow-sky-100"
                        >
                            Ir a la página principal
                        </Link>
                    </div>
                )}

                {estado === 'error' && (
                    <div>
                        <div className="w-16 h-16 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-rose-100">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-black text-slate-800 mb-3 tracking-tight">No se pudo cancelar</h2>
                        <p className="text-rose-600 font-medium mb-8 bg-rose-50/50 py-3 px-4 rounded-xl text-sm border border-rose-100/50">
                            {errorMsg || "El enlace no es válido o ya fue utilizado anteriormente."}
                        </p>
                        <div className="flex flex-col gap-2">
                            <Link
                                to="/faq"
                                className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-sky-700 transition-all cursor-pointer"
                            >
                                Ir al Centro de Ayuda
                            </Link>
                            <Link 
                                to="/" 
                                className="w-full text-slate-400 py-3 font-bold text-sm hover:text-slate-600 transition-colors cursor-pointer"
                            >
                                Volver al inicio
                            </Link>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default CancelarTurno;