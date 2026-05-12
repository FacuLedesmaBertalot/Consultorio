import { Navigate } from 'react-router-dom';
import { useAdminData } from '../hooks/useAdminData';
import AdminTestimonios from '../components/Admin/AdminTestimonios'; 
import AdminMedicos from '../components/Admin/AdminMedicos';

const SuperAdmin = () => {
    const { perfil, cargando } = useAdminData();

    if (cargando) return <div className="text-center mt-20 font-bold">Cargando panel maestro...</div>;

    if (perfil?.rol !== 'superadmin') {
        return <Navigate to="/admin" />;
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-8 animate-fade-in">
            
            {/* Header exclusivo del SuperAdmin */}
            <div className="bg-sky-900 text-white p-6 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-4 border-b-4 border-orange-500">
                <div>
                    <h2 className="text-2xl md:text-3xl font-black tracking-wide uppercase">Panel de Control Maestro</h2>
                    <p className="text-sky-200 mt-1 font-medium">Gestión global de la clínica VitaeSalud.</p>
                </div>
                <div className="bg-sky-800/50 p-3 rounded-xl flex items-center gap-4 border border-sky-700">
                    <div className="text-right hidden sm:block">
                        <p className="text-xs text-sky-300 font-bold uppercase tracking-widest">Conectado como</p>
                        <p className="text-sm font-bold text-white">{perfil?.email}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center font-black text-white shadow-md text-xl">
                        SA
                    </div>
                </div>
            </div>
            
            <AdminTestimonios /> 
            <AdminMedicos />

        </div>
    );
};

export default SuperAdmin;