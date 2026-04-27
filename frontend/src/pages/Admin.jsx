import { useState, useEffect } from 'react';

const Admin = () => {

    // Turnos para solamente visualizar
    const [turnos, setTurnos] = useState([
        { _id: '1', nombrePaciente: 'Marcos Galperin', hora: '09:00', motivo: 'Chequeo Anual', estado: 'Confirmado' },
        { _id: '2', nombrePaciente: 'Lionel Messi', hora: '10:30', motivo: 'Dolor muscular', estado: 'Pendiente' },
        { _id: '3', nombrePaciente: 'Antonela Roccuzzo', hora: '11:15', motivo: 'Consulta Dermatología', estado: 'Confirmado' },
    ]);

    useEffect(() => {
        const obtenerTurnos = async () => {
            // Aquí irá la lógica del backend
        };
        obtenerTurnos();
    }, []);


  return (
        <>
            {/* ENCABEZADO */}
            <div className="mb-10">
                <h1 className="text-4xl font-black text-sky-900">
                    Panel de <span className="text-orange-600">Control</span>
                </h1>
                <p className="text-slate-500 font-medium text-lg mt-2">
                    Bienvenido, Doctor. Aquí tienes la agenda para el día de hoy.
                </p>
            </div>

            {/* TARJETAS DE RESUMEN RÁPIDO */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 border-l-4 border-l-sky-500">
                    <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Turnos Hoy</p>
                    <p className="text-3xl font-black text-slate-700 mt-1">{turnos.length}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 border-l-4 border-l-orange-500">
                    <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Próxima Cita</p>
                    <p className="text-xl font-black text-slate-700 mt-1">09:00 AM</p>
                </div>
            </div>

            {/* TABLA DE TURNOS */}
            <div className="bg-white shadow-xl rounded-3xl overflow-hidden border border-slate-100">
                <div className="p-6 border-b border-slate-50 bg-slate-50/50 flex justify-between items-center">
                    <h2 className="font-black text-slate-700 uppercase tracking-wide">Agenda del Día</h2>
                    <span className="bg-sky-100 text-sky-700 text-xs font-bold px-3 py-1 rounded-full uppercase">
                        {new Date().toLocaleDateString()}
                    </span>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50">
                                <th className="px-6 py-4 text-slate-500 font-bold uppercase text-xs">Horario</th>
                                <th className="px-6 py-4 text-slate-500 font-bold uppercase text-xs">Paciente</th>
                                <th className="px-6 py-4 text-slate-500 font-bold uppercase text-xs">Motivo</th>
                                <th className="px-6 py-4 text-slate-500 font-bold uppercase text-xs">Estado</th>
                                <th className="px-6 py-4 text-slate-500 font-bold uppercase text-xs text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {turnos.map((turno) => (
                                <tr key={turno._id} className="hover:bg-sky-50/30 transition-colors group">
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                                            <span className="font-bold text-sky-900">{turno.hora} hs</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <p className="font-bold text-slate-700">{turno.nombrePaciente}</p>
                                    </td>
                                    <td className="px-6 py-5 text-slate-500 text-sm italic">
                                        {turno.motivo}
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                                            turno.estado === 'Confirmado' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                                        }`}>
                                            {turno.estado}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex justify-center gap-2">
                                            <button className="p-2 hover:bg-sky-100 text-sky-600 rounded-lg transition-colors title='Ver Historia Clínica'">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </button>
                                            <button className="p-2 hover:bg-red-100 text-red-600 rounded-lg transition-colors" title="Cancelar Turno">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-6 bg-slate-50/30 text-center">
                    <button className="text-sky-600 font-bold text-sm hover:text-sky-700 transition-colors uppercase tracking-widest">
                        Ver Agenda Completa &rarr;
                    </button>
                </div>
            </div>
        </>
    );
}

export default Admin