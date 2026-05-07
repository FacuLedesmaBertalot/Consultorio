import { useAdminData } from "../hooks/useAdminData";
import { usePerfil } from "../hooks/usePerfil";
import { Link } from 'react-router-dom';

const EditarPerfil = () => {
    const { perfil, setPerfil } = useAdminData();
    const { 
        datos, preview, mensaje, cargando, 
        handleInputChange, handleImageChange, handleSubmit 
    } = usePerfil(perfil, setPerfil);

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="mb-6">
                <Link 
                    to="/admin" 
                    className="group inline-flex items-center gap-2 text-slate-400 hover:text-sky-600 transition-all duration-300"
                >
                    <div className="bg-white p-1.5 rounded-lg shadow-sm border border-slate-100 group-hover:border-sky-200 group-hover:bg-sky-50 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest">Volver al Panel</span>
                </Link>

                <div className="mt-4">
                    <h1 className="text-3xl font-black text-sky-900 tracking-tight">Configuración de Perfil</h1>
                    <p className="text-slate-500 font-medium mt-1">Actualiza tu información profesional y foto de perfil.</p>
                </div>
            </div>

            <div className="bg-white shadow-xl rounded-3xl overflow-hidden border border-slate-100">
                <form onSubmit={handleSubmit} className="divide-y divide-slate-100">
                    
                    {/* SECCIÓN FOTO */}
                    <div className="p-8 flex flex-col sm:flex-row items-center gap-8">
                        <div className="relative group">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg bg-slate-100">
                                {preview ? (
                                    <img src={preview} alt="Vista previa" className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            <label className="absolute bottom-0 right-0 bg-sky-600 text-white p-2 rounded-full shadow-lg cursor-pointer hover:bg-sky-700 transition-colors border-2 border-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15a2.25 2.25 0 0 0 2.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                                </svg>
                                <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                            </label>
                        </div>
                        <div className="text-center sm:text-left">
                            <h2 className="text-lg font-bold text-slate-800">Foto de Perfil</h2>
                            <p className="text-sm text-slate-500 mb-2">JPG, PNG o WebP. Máximo 2MB.</p>
                            <span className="text-xs font-bold text-sky-600 bg-sky-50 px-3 py-1 rounded-full uppercase tracking-wider">Visible para tus pacientes</span>
                        </div>
                    </div>

                    {/* SECCIÓN DATOS */}
                    <div className="p-8">
                        {mensaje.texto && (
                            <div className={`mb-6 p-4 rounded-xl text-sm font-bold border ${
                                mensaje.tipo === 'exito' ? 'bg-green-50 border-green-100 text-green-700' : 'bg-red-50 border-red-100 text-red-700'
                            }`}>
                                {mensaje.texto}
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Nombre Completo</label>
                                <input 
                                    type="text" 
                                    name="nombre"
                                    value={datos.nombre}
                                    onChange={handleInputChange}
                                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-sky-500 focus:bg-white transition-all font-medium text-slate-700" 
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Correo Electrónico</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={datos.email}
                                    onChange={handleInputChange}
                                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-sky-500 focus:bg-white transition-all font-medium text-slate-700" 
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-black text-slate-500 uppercase tracking-widest">
                                    Especialidad Principal
                                </label>

                                <div className="relative group">
                                    <select 
                                        name="especialidad"
                                        value={datos.especialidad}
                                        disabled
                                        className="w-full p-3.5 bg-slate-100 border border-slate-200 rounded-xl outline-none 
                                                appearance-none cursor-not-allowed
                                                text-slate-400 font-medium
                                                transition-all duration-300"
                                    >
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
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Teléfono de contacto</label>
                                <input 
                                    type="text" 
                                    name="telefono"
                                    value={datos.telefono}
                                    onChange={handleInputChange}
                                    placeholder="Ej: +54 9 11..."
                                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-sky-500 focus:bg-white transition-all font-medium text-slate-700" 
                                />
                            </div>
                        </div>
                    </div>

                    {/* PIE DE FORMULARIO */}
                    <div className="p-8 bg-slate-50/50 flex justify-end">
                        <button 
                            type="submit"
                            disabled={cargando}
                            className={`bg-sky-600 text-white px-8 py-3 rounded-xl font-bold uppercase text-sm shadow-lg shadow-sky-600/20 hover:bg-sky-700 transition-all flex items-center gap-2 hover:cursor-pointer ${cargando ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {cargando ? (
                                <>
                                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Guardando...
                                </>
                            ) : 'Guardar Cambios'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditarPerfil;