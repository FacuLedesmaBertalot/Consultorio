import { Link} from 'react-router-dom';

const Nav = () => {
return (
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center p-5 px-10">
                <Link to="/" className="text-2xl font-black text-sky-700">
                    Consultorio<span className="text-orange-600">Médico</span>
                </Link>

                <div className="flex items-center gap-6">
                    <Link to="/" className="text-slate-600 hover:text-sky-700 font-semibold transition-colors">Inicio</Link>
                    <Link to="/agendar" className="text-slate-600 hover:text-sky-700 font-semibold transition-colors">Agendar</Link>
                    
                    <Link 
                        to="/login" 
                        className="bg-sky-100 text-sky-700 px-4 py-2 rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-sky-200 transition-all"
                    >
                        Acceso Médicos
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;