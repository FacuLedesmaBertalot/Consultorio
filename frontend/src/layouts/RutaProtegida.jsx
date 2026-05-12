import { Navigate, Outlet } from 'react-router-dom';
import { useAdminData } from '../hooks/useAdminData'; 
import Sidebar from '../components/Sidebar';
import SidebarSuperAdmin from '../components/Admin/SidebarSuperAdmin'; 

const RutaProtegida = () => {
    const { perfil, cargando } = useAdminData();
    const token = localStorage.getItem('token');

    if (cargando) return <div className="text-center mt-20 font-bold text-slate-500">Cargando panel...</div>;

    if (!token || !perfil?._id) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-slate-50">
            
            {perfil?.rol === 'superadmin' ? (
                <SidebarSuperAdmin />
            ) : (
                <Sidebar />
            )}

            <main className="flex-1 p-6 md:p-12 overflow-y-auto">
                <div className="max-w-6xl mx-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}

export default RutaProtegida;