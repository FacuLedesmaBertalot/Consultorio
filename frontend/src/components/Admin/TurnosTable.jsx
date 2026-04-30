import { esTurnoPasado } from "../../utils/helpers";

const TurnosTable = ({ turnos, titulo, onLimpiarFiltro }) => {
    if (turnos.length === 0) {
        return (
            <div className="text-center py-16 px-4">
                <p className="text-slate-500 font-bold text-lg">No hay turnos para mostrar.</p>
                <button onClick={onLimpiarFiltro} className="text-sky-600 underline text-sm mt-2">Borrar filtros</button>
            </div>
        );
    }

    return (
        <>
            <div className="p-6 border-b border-slate-50 bg-slate-50/50 text-center sm:text-left">
                <h2 className="font-black text-slate-700 uppercase tracking-wide">{titulo}</h2>
            </div>

            <div className="md:hidden divide-y divide-slate-100">
                {turnos.map((turno) => {
                    const pasado = esTurnoPasado(turno.fecha);
                    return (
                        <div key={turno._id} className={`p-5 flex flex-col gap-3 transition-all ${pasado ? 'opacity-60 bg-slate-50/80 grayscale' : ''}`}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <div className={`font-bold text-lg ${pasado ? 'text-slate-500' : 'text-sky-900'}`}>{turno.horario} hs</div>
                                    <div className="text-xs text-slate-400 font-bold uppercase">{turno.fecha}</div>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${pasado ? 'bg-slate-200 text-slate-500' : 'bg-green-100 text-green-700'}`}>
                                    {pasado ? 'Finalizado' : 'Confirmado'}
                                </span>
                            </div>
                            <div className={`p-3 rounded-xl border ${pasado ? 'bg-transparent border-slate-200' : 'bg-slate-50 border-slate-100'}`}>
                                <div className="font-bold text-slate-700">{turno.paciente?.nombre || 'Sin nombre'}</div>
                                <div className="text-xs text-slate-400 font-medium">DNI: {turno.paciente?.dni || 'N/A'}</div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="hidden md:block overflow-x-auto text-center"> 
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 border-b border-slate-200">
                            <th className="px-8 py-4 text-slate-500 font-bold uppercase text-[11px] tracking-wider whitespace-nowrap">Fecha y Hora</th>
                            <th className="px-8 py-4 text-slate-500 font-bold uppercase text-[11px] tracking-wider whitespace-nowrap">Paciente</th>
                            <th className="px-8 py-4 text-slate-500 font-bold uppercase text-[11px] tracking-wider whitespace-nowrap">Contacto</th>
                            <th className="px-8 py-4 text-slate-500 font-bold uppercase text-[11px] tracking-wider text-center whitespace-nowrap">Estado</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {turnos.map((turno) => {
                            const pasado = esTurnoPasado(turno.fecha);
                            
                            return (
                                <tr key={turno._id} className={`group transition-colors ${pasado ? 'bg-slate-50/50 opacity-60' : 'hover:bg-sky-50/50'}`}>
                                    
                                    {/* Aumentamos padding, centramos verticalmente (align-middle) y evitamos saltos de línea */}
                                    <td className="px-8 py-6 align-middle whitespace-nowrap">
                                        <div className={`font-bold text-lg ${pasado ? 'text-slate-500' : 'text-sky-900'}`}>{turno.horario} hs</div>
                                        <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">{turno.fecha}</div>
                                    </td>
                                    
                                    <td className="px-8 py-6 align-middle">
                                        <div className={`font-bold text-base ${pasado ? 'text-slate-500' : 'text-slate-700'}`}>{turno.paciente?.nombre || 'Sin nombre'}</div>
                                        <div className="text-xs text-slate-400 font-medium uppercase mt-1">DNI: {turno.paciente?.dni || 'N/A'}</div>
                                    </td>
                                    
                                    <td className="px-8 py-6 align-middle text-slate-500 text-sm font-medium whitespace-nowrap">
                                        {turno.paciente?.email || 'No provisto'}
                                    </td>
                                    
                                    <td className="px-8 py-6 align-middle text-center whitespace-nowrap">
                                        {/* Hice la "pastilla" de estado un poco más ancha con px-4 */}
                                        <span className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm ${pasado ? 'bg-slate-200 text-slate-500' : 'bg-green-100 text-green-700'}`}>
                                            {pasado ? 'Finalizado' : 'Confirmado'}
                                        </span>
                                    </td>
                                    
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TurnosTable;