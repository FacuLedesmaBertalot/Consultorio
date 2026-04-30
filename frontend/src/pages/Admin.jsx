import { useAdminData } from '../hooks/useAdminData';
import AdminHeader from '../components/Admin/AdminHeader';
import AdminStats from '../components/Admin/AdminStats';
import AdminFilters from '../components/Admin/AdminFilters';
import TurnosTable from '../components/Admin/TurnosTable';

const Admin = () => {
    const { perfil, turnos, turnosAMostrar, cargando, filtroFecha, setFiltroFecha } = useAdminData();

    if (cargando) return <div className="text-center mt-20 font-bold">Cargando panel...</div>;

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <AdminHeader perfil={perfil} />
            
            <AdminStats turnosTotales={turnos.length} email={perfil.email} />
            
            <AdminFilters 
                filtroFecha={filtroFecha} 
                setFiltroFecha={setFiltroFecha} 
            />

            <div className="bg-white shadow-xl rounded-3xl overflow-hidden border border-slate-100">
                <TurnosTable 
                    turnos={turnosAMostrar} 
                    titulo={filtroFecha ? `Turnos del ${filtroFecha}` : "Todos los turnos"}
                    onLimpiarFiltro={() => setFiltroFecha('')}
                />
            </div>
        </div>
    );
};

export default Admin;