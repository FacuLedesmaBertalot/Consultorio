import { useState, useEffect } from "react";

const AdminTestimonios = () => {
    const [testimonios, setTestimonios] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const obtenerTestimonios = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) return;

                const url = `${import.meta.env.VITE_BACKEND_URL}/testimonios/admin`;
                const respuesta = await fetch(url, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }); 

                const resultado = await respuesta.json();
                setTestimonios(resultado);
            } catch (error) {
                console.log("Error al cargar testimonios: ", error);
            } finally {
                setCargando(false);
            }
        };
        obtenerTestimonios();
    }, []);

    const toggleEstado = async id => {
        try {
            const token = localStorage.getItem('token');
            const url = `${import.meta.env.VITE_BACKEND_URL}/testimonios/admin/${id}`;
            
            const respuesta = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (respuesta.ok) {
                const testimoniosActualizados = testimonios.map(testimonio => 
                    testimonio._id === id ? { ...testimonio, aprobado: !testimonio.aprobado } : testimonio
                );
                setTestimonios(testimoniosActualizados);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const eliminarTestimonio = async (id) => {
        const confirmar = confirm('¿Estás seguro de eliminar este testimonio permanentemente?');
        if (!confirmar) return;

        try {
            const token = localStorage.getItem('token');
            const url = `${import.meta.env.VITE_BACKEND_URL}/testimonios/admin/${id}`;
            
            const respuesta = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (respuesta.ok) {
                const testimoniosRestantes = testimonios.filter(testimonio => testimonio._id !== id);
                setTestimonios(testimoniosRestantes);
            }
        } catch (error) {
            console.log(error);
        }
    };

    if (cargando) return <p className="text-center text-slate-500 my-10">Cargando testimonios...</p>;


    return (
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-black text-slate-800 mb-6">Administrar Testimonios</h2>

            {testimonios.length === 0 ? (
                <p className="text-slate-500 text-center py-10">Aún no hay testimonios de pacientes.</p>
            ) : (
                <div className="space-y-4">
                    {testimonios.map(testimonio => (
                        <div key={testimonio._id} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                            
                            {/* Información del testimonio */}
                            <div className="flex-1 space-y-2">
                                <div className="flex items-center gap-3">
                                    <p className="font-bold text-slate-800">{testimonio.nombre}</p>
                                    <span className="flex text-orange-400 text-sm">
                                        {'★'.repeat(testimonio.estrellas)}
                                        <span className="text-slate-300">{'★'.repeat(5 - testimonio.estrellas)}</span>
                                    </span>
                                </div>
                                <p className="text-slate-600 italic">"{testimonio.texto}"</p>
                                
                                <div>
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                                        testimonio.aprobado ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                                    }`}>
                                        {testimonio.aprobado ? '✓ Visible al público' : '⏳ Pendiente de revisión'}
                                    </span>
                                </div>
                            </div>

                            {/* Botones de acción */}
                            <div className="flex flex-row md:flex-col gap-2 shrink-0">
                                <button 
                                    onClick={() => toggleEstado(testimonio._id)}
                                    className={`px-4 py-2 rounded-xl font-bold text-sm transition-colors hover:cursor-pointer ${
                                        testimonio.aprobado 
                                            ? 'bg-slate-200 text-slate-700 hover:bg-slate-300' // Botón para ocultar
                                            : 'bg-emerald-500 text-white hover:bg-emerald-600'  // Botón para aprobar
                                    }`}
                                >
                                    {testimonio.aprobado ? 'Ocultar' : 'Aprobar'}
                                </button>

                                <button 
                                    onClick={() => eliminarTestimonio(testimonio._id)}
                                    className="px-4 py-2 bg-red-100 text-red-600 hover:bg-red-200 rounded-xl font-bold text-sm transition-colors hover:cursor-pointer"
                                >
                                    Eliminar
                                </button>
                            </div>
                            
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AdminTestimonios;