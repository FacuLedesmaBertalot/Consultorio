const AdminFilters = ({ filtroFecha, setFiltroFecha }) => {
    return (
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
                <p className="text-orange-600 font-bold">Filtrado por Fecha</p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
                <input 
                    type="date"
                    className="flex-1 sm:w-48 p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 text-sm font-bold text-slate-600 transition-all"
                    value={filtroFecha}
                    onChange={ e => setFiltroFecha(e.target.value)}
                />

                {filtroFecha !== '' && (
                    <button
                        onClick={() => setFiltroFecha('')}
                        className="bg-orange-50 text-orange-600 border border-orange-100 px-4 py-2.5 rounded-xl text-[10px] font-black uppercase hover:bg-orange-600 hover:text-white transition-all shadow-sm"
                    >
                        Ver Todo
                    </button>
                )}
            </div>
        </div>
    );
};

export default AdminFilters;