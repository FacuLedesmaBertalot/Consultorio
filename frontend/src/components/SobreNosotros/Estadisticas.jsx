const Estadisticas = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-12 items-center py-10 border-y border-slate-200 hover:cursor-default">
            
            <div className="w-full lg:w-1/3 grid grid-cols-2 gap-8">
                <div className="text-center space-y-1">
                    <p className="text-4xl font-black text-sky-600">+15</p>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Años Exp.</p>
                </div>
                <div className="text-center space-y-1">
                    <p className="text-4xl font-black text-orange-400">20</p>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Especialidades</p>
                </div>
                <div className="text-center space-y-1">
                    <p className="text-4xl font-black text-emerald-500">+10k</p>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Pacientes</p>
                </div>
                <div className="text-center space-y-1">
                    <p className="text-4xl font-black text-sky-600">100%</p>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Compromiso</p>
                </div>
            </div>
            <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center space-y-3 hover:shadow-lg transition-all hover:-translate-y-2 duration-300">
                    <div className="bg-sky-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center text-sky-600">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    </div>
                    <h3 className="font-bold text-slate-800 text-sm">Profesionales de Élite</h3>
                    <p className="text-xs text-slate-500">Equipo rigurosamente seleccionado y en formación.</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center space-y-3 hover:shadow-lg transition-all hover:-translate-y-2 duration-300 delay-100">
                    <div className="bg-orange-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center text-orange-600">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <h3 className="font-bold text-slate-800 text-sm">Sin Demoras</h3>
                    <p className="text-xs text-slate-500">Gestión inteligente para que tu tiempo sea respetado.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center space-y-3 hover:shadow-lg transition-all hover:-translate-y-2 duration-300 delay-200">
                    <div className="bg-emerald-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center text-emerald-600">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <h3 className="font-bold text-slate-800 text-sm">Tecnología</h3>
                    <p className="text-xs text-slate-500">Seguimiento preciso de tu historial clínico.</p>
                </div>
            </div>

        </div>
    );
};

export default Estadisticas;