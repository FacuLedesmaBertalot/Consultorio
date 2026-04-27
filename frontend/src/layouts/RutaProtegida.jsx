import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const RutaProtegida = () => {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-slate-50">
            <Sidebar />

            <main className="flex-1 p-6 md:p-12 overflow-y-auto">
                <div className="max-w-6xl mx-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}

export default RutaProtegida;