
const AdminHeader = ({ perfil }) => {
    return (
        <div className="mb-10 flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-6 text-center sm:text-left">
            {perfil.imagen ? (
                <img src={perfil.imagen} alt="Perfil" className="w-24 h-24 rounded-full object-cover shadow-lg border-4 border-white" />
            ) : (
                <div className="w-24 h-24 rounded-full bg-sky-100 flex items-center justify-center shadow-lg border-4 border-white shrink-0">
                    <span className="text-sky-700 font-black text-3xl">
                        {perfil.nombre ? perfil.nombre.charAt(0).toUpperCase() : 'Dr'}
                    </span>
                </div>
            )}
            
            <div className="flex flex-col justify-center">
                <h1 className="text-3xl sm:text-4xl font-black text-sky-900">
                    Hola, <span className="text-orange-600">{perfil.nombre || 'Doctor'}</span>
                </h1>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs sm:text-sm mt-2">
                    Especialidad: {perfil.especialidad || 'No definida'} <br className="sm:hidden" />
                    <span className="hidden sm:inline"> • </span>
                    Matrícula: {perfil.matricula || 'N/A'}
                </p>
            </div>
        </div>
    );
};

export default AdminHeader;