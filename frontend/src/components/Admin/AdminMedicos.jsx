import { useState, useEffect } from 'react';

const AdminMedicos = () => {
    const [medicos, setMedicos] = useState([]);
    const [cargando, setCargando] = useState(true);

    // 1. Obtener todos los médicos (Requiere Token de SuperAdmin)
    useEffect(() => {
        const obtenerMedicos = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) return;

                // Asegurate de que la ruta coincida con tu backend (usualmente es /api/medicos/...)
                const url = `${import.meta.env.VITE_BACKEND_URL}/medicos/admin/todos`;
                const respuesta = await fetch(url, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                
                const resultado = await respuesta.json();
                setMedicos(resultado);
            } catch (error) {
                console.log("Error al cargar médicos:", error);
            } finally {
                setCargando(false);
            }
        };

        obtenerMedicos();
    }, []);

    // 2. Función para Aprobar o Revocar acceso
    const toggleAprobacion = async (id) => {
        try {
            const token = localStorage.getItem('token');
            const url = `${import.meta.env.VITE_BACKEND_URL}/medicos/admin/aprobar/${id}`;
            
            const respuesta = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (respuesta.ok) {
                // Actualizamos el estado local para ver el cambio al instante
                const medicosActualizados = medicos.map(medico => 
                    medico._id === id ? { ...medico, confirmado: !medico.confirmado } : medico
                );
                setMedicos(medicosActualizados);
            }
        } catch (error) {
            console.log(error);
        }
    };

    // 3. Función para Eliminar definitivamente
    const eliminarMedico = async (id) => {
        const confirmar = confirm('¿Estás súper seguro? Esto borrará al médico de la base de datos permanentemente.');
        if (!confirmar) return;

        try {
            const token = localStorage.getItem('token');
            const url = `${import.meta.env.VITE_BACKEND_URL}/medicos/admin/eliminar/${id}`;
            
            const respuesta = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (respuesta.ok) {
                // Lo sacamos de la pantalla
                const medicosRestantes = medicos.filter(medico => medico._id !== id);
                setMedicos(medicosRestantes);
            }
        } catch (error) {
            console.log(error);
        }
    };

    if (cargando) return <p className="text-center text-slate-500 my-10">Cargando profesionales...</p>;

    return (
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 mt-8">
            <h2 className="text-2xl font-black text-slate-800 mb-6">Gestión de Profesionales</h2>

            {medicos.length === 0 ? (
                <p className="text-slate-500 text-center py-10">No hay médicos registrados en el sistema.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 text-slate-500 text-sm uppercase tracking-wider border-b border-slate-200">
                                <th className="p-4 font-bold rounded-tl-xl">Médico</th>
                                <th className="p-4 font-bold">Matrícula</th>
                                <th className="p-4 font-bold">Especialidad</th>
                                <th className="p-4 font-bold">Estado</th>
                                <th className="p-4 font-bold rounded-tr-xl text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {medicos.map(medico => (
                                <tr key={medico._id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            {/* Si tiene imagen la mostramos, si no mostramos sus iniciales */}
                                            {medico.imagen ? (
                                                <img src={medico.imagen} alt={medico.nombre} className="w-10 h-10 rounded-full object-cover shadow-sm" />
                                            ) : (
                                                <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-bold text-sm">
                                                    {medico.nombre.charAt(0)}
                                                </div>
                                            )}
                                            <div>
                                                <p className="font-bold text-slate-800">{medico.nombre}</p>
                                                <p className="text-xs text-slate-500">{medico.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 text-slate-600 text-sm font-medium">{medico.matricula}</td>
                                    <td className="p-4 text-slate-600 text-sm capitalize">{medico.especialidad}</td>
                                    <td className="p-4">
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                                            medico.confirmado ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                                        }`}>
                                            {medico.confirmado ? 'Aprobado' : 'Pendiente'}
                                        </span>
                                    </td>
                                    <td className="p-4 text-center space-x-2 whitespace-nowrap">
                                        <button 
                                            onClick={() => toggleAprobacion(medico._id)}
                                            className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-colors hover:cursor-pointer ${
                                                medico.confirmado 
                                                    ? 'bg-slate-100 text-slate-600 hover:bg-slate-200' 
                                                    : 'bg-emerald-500 text-white hover:bg-emerald-600'
                                            }`}
                                        >
                                            {medico.confirmado ? 'Revocar' : 'Aprobar'}
                                        </button>
                                        <button 
                                            onClick={() => eliminarMedico(medico._id)}
                                            className="px-3 py-1.5 bg-red-100 text-red-600 hover:bg-red-200 rounded-lg font-bold text-xs transition-colors hover:cursor-pointer"
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AdminMedicos;