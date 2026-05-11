import { useState } from 'react';

const FormularioTestimonio = () => {
    const [nombre, setNombre] = useState('');
    const [texto, setTexto] = useState('');
    const [estrellas, setEstrellas] = useState(5);
    const [hoverEstrella, setHoverEstrella] = useState(0);
    const [alerta, setAlerta] = useState({ msg: '', error: false });
    const [enviando, setEnviando] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if ([nombre, texto].includes('')) {
            setAlerta({ msg: 'Por favor, completá tu nombre y tu experiencia.', error: true });
            return;
        }

        setEnviando(true);

        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/testimonios`;
            const respuesta = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nombre, texto, estrellas })
            });

            const resultado = await respuesta.json();

            if (respuesta.ok) {
                setAlerta({ msg: resultado.msg, error: false });
                setNombre('');
                setTexto('');
                setEstrellas(5);
                
                setTimeout(() => setAlerta({ msg: '', error: false }), 4000);
            } else {
                setAlerta({ msg: resultado.msg, error: true });
            }

        } catch (error) {
            console.log(error);
            setAlerta({ msg: 'Hubo un error de conexión con el servidor', error: true });
        } finally {
            setEnviando(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto mt-20 relative">

            <div className="bg-white p-8 md:p-12 rounded-4xl shadow-2xl shadow-slate-200/50 border border-slate-100 relative z-10">
                
                <div className="text-center mb-10 space-y-3">
                    <h3 className="text-3xl font-black text-slate-800 tracking-tight">Tu opinión nos <span className="text-sky-600">inspira</span></h3>
                    <p className="text-slate-500 font-medium">Contanos cómo fue tu experiencia en VitaeSalud.</p>
                </div>

                {alerta.msg && (
                    <div className={`${alerta.error ? 'bg-red-50 text-red-600 border-red-100' : 'bg-emerald-50 text-emerald-600 border-emerald-100'} border p-4 rounded-2xl text-center font-bold mb-8 transition-all animate-fade-in`}>
                        {alerta.msg}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                    
                    <div className="flex flex-col items-center space-y-3 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <label className="font-bold text-slate-700">¿Cómo calificarías tu atención?</label>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setEstrellas(star)}
                                    onMouseEnter={() => setHoverEstrella(star)}
                                    onMouseLeave={() => setHoverEstrella(0)}
                                    className="focus:outline-none transition-transform hover:scale-110 hover:cursor-pointer"
                                >
                                    <svg 
                                        className={`w-10 h-10 transition-colors duration-200 ${
                                            star <= (hoverEstrella || estrellas) 
                                                ? 'text-orange-400' 
                                                : 'text-slate-200'
                                        }`} 
                                        fill="currentColor" 
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                        <div className="relative">
                            <label className="block text-slate-700 font-bold mb-2 ml-1">Tu Nombre</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <input 
                                    type="text"
                                    placeholder="Ej. María Fernández"
                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                                    value={nombre}
                                    onChange={e => setNombre(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <label className="block text-slate-700 font-bold mb-2 ml-1">Tu Experiencia</label>
                            <textarea 
                                placeholder="Escribí tu reseña aquí..."
                                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all h-32 resize-none"
                                value={texto}
                                onChange={e => setTexto(e.target.value)}
                            ></textarea>
                        </div>
                    </div>

                    <button 
                        type="submit"
                        disabled={enviando}
                        className={`w-full flex items-center justify-center gap-2 text-white font-bold py-4 rounded-2xl uppercase tracking-wider transition-all hover:cursor-pointer
                            ${enviando ? 'bg-slate-400 cursor-not-allowed' : 'bg-sky-600 hover:bg-sky-700 shadow-lg shadow-sky-600/30 hover:-translate-y-1'}`}
                    >
                        {enviando ? (
                            'Enviando...'
                        ) : (
                            <>
                                Enviar Testimonio
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FormularioTestimonio;