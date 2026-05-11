import { useState, useEffect } from 'react';

const Testimonios = () => {
    const [testimonios, setTestimonios] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const obtenerTestimonios = async () => {
            try {
                const url = `${import.meta.env.VITE_BACKEND_URL}/testimonios/publicos`;
                const respuesta = await fetch(url);
                const resultado = await respuesta.json();
                
                setTestimonios(resultado);
            } catch (error) {
                console.log("Error al cargar testimonios:", error);
            } finally {
                setCargando(false);
            }
        };

        obtenerTestimonios();
    }, []);

    if (cargando || testimonios.length === 0) return null;

    return (
        <div className="space-y-10">
            <div className="text-center">
                <h2 className="text-3xl font-black text-sky-900">Lo que dicen nuestros pacientes</h2>
                <p className="text-slate-500 mt-2">Experiencias reales de quienes confían en nosotros.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonios.map((testimonio) => (
                    <div key={testimonio._id} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm relative hover:shadow-md transition-shadow">
                        <div className="text-orange-400 flex gap-1 mb-4">
                            {[...Array(testimonio.estrellas)].map((_, i) => (
                                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <p className="text-slate-600 italic mb-6">"{testimonio.texto}"</p>
                        <p className="font-bold text-sky-900">- {testimonio.nombre}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonios;