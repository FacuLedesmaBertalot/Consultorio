
const AdminStats = ({ turnosTotales, email }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 border-l-4 border-l-sky-500 flex flex-col justify-center text-center sm:text-left">
                <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Turnos Totales</p>
                <p className="text-4xl font-black text-slate-700 mt-2">{turnosTotales}</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 border-l-4 border-l-orange-500 flex flex-col justify-center text-center sm:text-left">
                <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Email Registrado</p>
                <p className="text-sm font-bold text-slate-700 mt-2 truncate">{email}</p>
            </div>
        </div>
    );
};

export default AdminStats;