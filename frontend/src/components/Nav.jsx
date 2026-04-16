import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center p-5 px-6 md:px-10 relative">
                
                <Link to="/" className="text-2xl font-black text-sky-700">
                    Vitae<span className="text-orange-600">Salud</span>
                </Link>

                <div className="hidden md:flex items-center gap-6">
                    <Link to="/" className="text-slate-600 hover:text-sky-700 font-semibold transition-colors">Inicio</Link>
                    <Link to="/agendar" className="text-slate-600 hover:text-sky-700 font-semibold transition-colors">Agendar</Link>
                    <Link to="/login" className="bg-sky-100 text-sky-700 px-4 py-2 rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-sky-200 transition-all">
                        Acceso Médicos
                    </Link>
                </div>

                <input type="checkbox" id="menu-toggle" className="hidden peer" />

                <label htmlFor="menu-toggle" className="md:hidden cursor-pointer text-slate-600 hover:text-sky-700">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>

                <div className="hidden peer-checked:flex flex-col md:hidden bg-white border-t border-slate-100 px-6 py-6 shadow-2xl absolute top-full left-0 w-full gap-5">
                    <Link to="/" className="text-slate-600 hover:text-sky-700 font-semibold text-lg transition-colors">
                        Inicio
                    </Link>
                    <Link to="/agendar" className="text-slate-600 hover:text-sky-700 font-semibold text-lg transition-colors">
                        Agendar Turno
                    </Link>
                    <Link to="/login" className="bg-sky-100 text-sky-700 px-4 py-4 mt-2 rounded-xl font-bold uppercase text-sm tracking-widest hover:bg-sky-200 transition-all text-center">
                        Acceso Médicos
                    </Link>
                </div>
                
            </div>
        </nav>
    );
};

export default Nav;