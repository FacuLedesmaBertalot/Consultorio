import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SidebarSuperAdmin = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);
    
    const location = useLocation();
    const navigate = useNavigate();

    const cerrarSesion = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const linkClase = (path) => 
        `flex items-center gap-4 p-3 rounded-xl transition-all font-bold uppercase text-sm ${
            location.pathname === path 
            ? 'bg-slate-800 text-white shadow-lg shadow-slate-300' 
            : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800'
        }`;

    return (
        <>
            <div className="md:hidden flex justify-between items-center bg-white p-4 border-b border-slate-100 sticky top-0 z-20 shadow-sm">
                <h1 className="text-xl font-black text-slate-800">
                    Vitae<span className="text-orange-600">Salud</span>
                </h1>
                
                <button 
                    onClick={() => setMenuAbierto(true)} 
                    className="p-2 text-slate-500 hover:text-slate-800 transition-colors bg-slate-50 rounded-lg"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>

            {menuAbierto && (
                <div 
                    className="fixed inset-0 bg-black/40 z-30 md:hidden backdrop-blur-sm transition-opacity"
                    onClick={() => setMenuAbierto(false)}
                />
            )}

            <aside className={`
                fixed inset-y-0 left-0 z-40 w-72 bg-white border-r border-slate-100 p-6 flex flex-col justify-between 
                transition-transform duration-300 ease-in-out
                md:static md:translate-x-0 shrink-0 min-h-screen
                ${menuAbierto ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
            `}>
                
                <div>
                    <div className="mb-10 px-2 flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-black text-slate-800">
                                Vitae<span className="text-orange-600">Salud</span>
                            </h1>
                            <p className="text-[10px] text-orange-500 font-bold uppercase tracking-widest">Panel Maestro</p>
                        </div>
                        
                        <button 
                            className="md:hidden p-2 text-slate-400 hover:text-red-500 bg-slate-50 rounded-lg transition-colors" 
                            onClick={() => setMenuAbierto(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <nav className="flex flex-col gap-2">
                        <Link to="/admin/maestro" onClick={() => setMenuAbierto(false)} className={linkClase('/admin/maestro')}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                            </svg>
                            Panel General
                        </Link>

                        <Link to="/" onClick={() => setMenuAbierto(false)} className="flex items-center gap-4 p-3 rounded-xl transition-all font-bold uppercase text-sm text-slate-500 hover:bg-slate-50 hover:text-slate-800 mt-4 border border-slate-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                            Ver Sitio Web
                        </Link>
                    </nav>
                </div>

                <button 
                    onClick={cerrarSesion}
                    className="flex items-center gap-4 p-3 rounded-xl font-bold uppercase text-sm text-red-500 hover:bg-red-50 transition-all mt-10 hover:cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                    </svg>
                    Cerrar Sesión
                </button>
            </aside>
        </>
    );
};

export default SidebarSuperAdmin;