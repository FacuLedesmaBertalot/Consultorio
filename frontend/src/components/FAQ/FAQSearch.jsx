const FAQSearch = ({ busqueda, handleBusqueda, categorias }) => (
    <div className="max-w-3xl mx-auto px-6 -mt-12 relative z-20">
        <div className="relative group mb-8">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                <svg className="w-6 h-6 text-slate-400 group-focus-within:text-sky-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            
            <input 
                type="text"
                placeholder="Buscá por palabra clave..."
                className="w-full p-6 pl-16 pr-16 rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 text-lg outline-none focus:ring-4 focus:ring-sky-500/5 focus:border-sky-500 transition-all text-slate-700"
                value={busqueda}
                onChange={(e) => handleBusqueda(e.target.value)}
            />

            {busqueda && (
                <button 
                    onClick={() => handleBusqueda('')}
                    className="absolute inset-y-0 right-6 flex items-center text-slate-400 hover:text-orange-500 transition-colors cursor-pointer"
                >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                </button>
            )}
        </div>

        <div className="flex flex-wrap justify-center gap-x-2 gap-y-3 mb-12 px-4 sm:px-0">
            {categorias.map(cat => (
                <button
                    key={cat}
                    onClick={() => handleBusqueda(cat)}
                    className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer border
                        ${busqueda.toLowerCase() === cat.toLowerCase() 
                            ? 'bg-sky-700 text-white border-sky-700 shadow-lg shadow-sky-200 scale-105' 
                            : 'bg-slate-100 text-slate-500 border-transparent hover:bg-sky-50 hover:text-sky-700'}`}
                >
                    {cat}
                </button>
            ))}
        </div>
    </div>
);

export default FAQSearch;