const FormularioReserva = ({ 
    especialidad, setEspecialidad, profesional, setProfesional,
    fecha, setFecha, horario, setHorario, nombre, setNombre,
    dni, setDni, email, setEmail, medicos, horariosBase,
    horariosOcupados, cargando, enviado, error, handleSubmit 
}) => {
    return (
        <div className='p-8 sm:p-10 lg:p-12 lg:w-[65%] xl:w-2/3 flex-1'>
            {enviado && <div className='bg-green-50 border-l-4 border-green-500 text-green-700 p-5 mb-8 rounded-r-xl font-medium'>¡Turno solicitado con éxito!</div>} 
            {error && <div className='bg-red-50 border-l-4 border-red-500 text-red-700 p-5 mb-8 rounded-r-xl font-medium'>{error}</div>}

            <form onSubmit={handleSubmit}>
                {/* Sección 1: Detalles */}
                <div className="mb-10">
                    <h3 className="text-xl font-black text-sky-800 mb-6 flex items-center gap-2">
                        <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                        Detalles del Turno
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                        <div className="flex flex-col">
                            <label className="uppercase text-slate-500 text-[10px] font-bold mb-2">Especialidad</label>
                            <select className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl outline-none" value={especialidad} onChange={e => setEspecialidad(e.target.value)}>
                                <option value="">-- Selecciona Especialidad --</option>
                                <option value="clinica">Clínica Médica</option>
                                <option value="pediatria">Pediatría</option>
                                <option value="cardiologia">Cardiología</option>
                                <option value="dermatologia">Dermatología</option>
                                <option value="ginecologia">Ginecología</option>
                                <option value="traumatologia">Traumatología</option>
                                <option value="oftalmologia">Oftalmología</option>
                                <option value="nutricion">Nutrición</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="uppercase text-slate-500 text-[10px] font-bold mb-2">Médico Profesional</label>
                            <select className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl outline-none" disabled={especialidad === '' || cargando} value={profesional} onChange={e => setProfesional(e.target.value)}>
                                <option value="">{cargando ? 'Buscando...' : '-- Selecciona --'}</option>
                                {medicos?.map(medico => <option key={medico._id} value={medico._id}>{medico.nombre}</option>)}
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="uppercase text-slate-500 text-[10px] font-bold mb-2">Fecha</label>
                            <input type="date" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl outline-none" value={fecha} onChange={e => setFecha(e.target.value)} />
                        </div>
                        <div className="flex flex-col">
                            <label className="uppercase text-slate-500 text-[10px] font-bold mb-2">Horario</label>
                            <select className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl outline-none" value={horario} onChange={e => setHorario(e.target.value)} disabled={!fecha || !profesional}>
                                <option value="">-- Selecciona Hora --</option>
                                {horariosBase?.map(h => {
                                    const ocupado = horariosOcupados.includes(h);
                                    return <option key={h} value={h} disabled={ocupado}>{h} hs {ocupado ? '(No disponible)' : ''}</option>
                                })}
                            </select>
                        </div>
                    </div>
                </div>

                <hr className="border-slate-100 my-8" />

                {/* Sección 2: Datos Personales */}
                <div className="mb-8">
                    <h3 className="text-xl font-black text-sky-800 mb-6 flex items-center gap-2">
                        <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                        Tus Datos Personales
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                        <div className="flex flex-col">
                            <label className="uppercase text-slate-500 text-[10px] font-bold mb-2">Nombre y Apellido</label>
                            <input type="text" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl outline-none" value={nombre} onChange={e => setNombre(e.target.value)} />
                        </div>
                        <div className="flex flex-col">
                            <label className="uppercase text-slate-500 text-[10px] font-bold mb-2">DNI</label>
                            <input type="number" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl outline-none" value={dni} onChange={e => setDni(e.target.value)} />
                        </div>
                        <div className="flex flex-col sm:col-span-2">
                            <label className="uppercase text-slate-500 text-[10px] font-bold mb-2">Email</label>
                            <input type="email" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl outline-none" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end pt-4">
                    <button type="submit" className="bg-orange-500 text-white px-10 py-4 rounded-xl font-bold uppercase hover:bg-orange-600 transition-all shadow-lg w-full sm:w-auto">
                        Confirmar Reserva
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormularioReserva;