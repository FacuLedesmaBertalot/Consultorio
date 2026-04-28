import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {

    const [perfil, setPerfil] = useState({});
    const [turnos, setTurnos] = useState([]);
    const [cargando, setCargando] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const obtenerTurnos = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                navigate('/login');
                return;
            }

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            };

            try {
                const urlPerfil = `${import.meta.env.VITE_BACKEND_URL}/medicos/perfil`;
                const respuestaPerfil = await fetch(urlPerfil, config);
                const datosPerfil = await respuestaPerfil.json();

                if (respuestaPerfil.ok) {
                    setPerfil(datosPerfil);
                }

                const urlTurnos = `${import.meta.env.VITE_BACKEND_URL}/turnos`;
                const respuestaTurnos = await fetch (urlTurnos, config);
                const datosTurnos = await respuestaTurnos.json();

                if (respuestaTurnos.ok) {
                    setTurnos(datosTurnos);
                }


            } catch (error) {
                console.log("Error obteniendo datos:", error);
            } finally {
                setCargando(false);
            }
        };
        obtenerTurnos();
    }, []);

    const esTurnoPasado = (fechaStr) => {
        if (!fechaStr) return false;
        
        let year, month, day;
        if (fechaStr.includes('/')) {
            [day, month, year] = fechaStr.split('/');
        } else {
            [year, month, day] = fechaStr.split('-');
        }

        const fechaTurno = new Date(year, month - 1, day);
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);

        return fechaTurno < hoy;
    };

    if (cargando) return <div className="text-center text-sky-600 font-bold mt-20">Cargando tu panel... ⏳</div>; 


// ... (Asegúrate de tener la función esTurnoPasado definida antes del return, como te mostré en el mensaje anterior)

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 max-w-3xl mx-auto">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 border-l-4 border-l-sky-500 flex flex-col justify-center text-center sm:text-left">
                    <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Turnos Totales</p>
                    <p className="text-4xl font-black text-slate-700 mt-2">{turnos.length}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 border-l-4 border-l-orange-500 flex flex-col justify-center text-center sm:text-left">
                    <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Email Registrado</p>
                    <p className="text-sm font-bold text-slate-700 mt-2 truncate">{perfil.email}</p>
                </div>
            </div>

            <div className="bg-white shadow-xl rounded-3xl overflow-hidden border border-slate-100">
                <div className="p-6 border-b border-slate-50 bg-slate-50/50 text-center sm:text-left">
                    <h2 className="font-black text-slate-700 uppercase tracking-wide">Tus Próximos Pacientes</h2>
                </div>

                {turnos.length === 0 ? (
                    <div className="text-center py-16 px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto text-slate-300 mb-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008z" />
                        </svg>
                        <p className="text-slate-500 font-bold text-lg">No tienes turnos agendados por el momento.</p>
                        <p className="text-slate-400 text-sm mt-1">Comparte tu enlace para que tus pacientes comienzen a agendar.</p>
                    </div>
                ) : (
                    <>
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
                                            <div className="text-xs text-slate-500 font-medium mt-1 flex justify-between">
                                                <span>DNI: {turno.paciente?.dni || 'N/A'}</span>
                                                <span className="italic text-slate-400 truncate ml-2">{turno.paciente?.email}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="hidden md:block overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-100">
                                        <th className="px-6 py-4 text-slate-500 font-bold uppercase text-xs">Fecha y Hora</th>
                                        <th className="px-6 py-4 text-slate-500 font-bold uppercase text-xs">Paciente</th>
                                        <th className="px-6 py-4 text-slate-500 font-bold uppercase text-xs">Contacto</th>
                                        <th className="px-6 py-4 text-slate-500 font-bold uppercase text-xs text-center">Estado</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {turnos.map((turno) => {
                                        const pasado = esTurnoPasado(turno.fecha);

                                        return (
                                            <tr key={turno._id} className={`group transition-colors ${pasado ? 'bg-slate-50/50 opacity-60' : 'hover:bg-sky-50/50'}`}>
                                                <td className="px-6 py-5">
                                                    <div className={`font-bold text-lg ${pasado ? 'text-slate-500' : 'text-sky-900'}`}>{turno.horario} hs</div>
                                                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">{turno.fecha}</div>
                                                </td>
                                                <td className="px-6 py-5">
                                                    <div className={`font-bold text-base ${pasado ? 'text-slate-500' : 'text-slate-700'}`}>{turno.paciente?.nombre || 'Sin nombre'}</div>
                                                    <div className="text-xs text-slate-400 font-medium uppercase mt-1">DNI: {turno.paciente?.dni || 'N/A'}</div>
                                                </td>
                                                <td className="px-6 py-5 text-slate-500 text-sm font-medium">
                                                    <a href={`mailto:${turno.paciente?.email}`} className={`${pasado ? '' : 'hover:text-sky-600'} transition-colors`}>
                                                        {turno.paciente?.email || 'No provisto'}
                                                    </a>
                                                </td>
                                                <td className="px-6 py-5 text-center">
                                                    <span className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm ${pasado ? 'bg-slate-200 text-slate-500' : 'bg-green-100 text-green-700'}`}>
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
                )}
            </div>
        </div>
    );
}

export default Admin;