import { useState, useEffect} from 'react';

const EditarPerfil = () => {

    const [perfil, setPerfil] = useState({
        nombre: '',
        telefono: '',
        especialidad: '',
        email: ''
    });

    const [archivo, setArchivo] = useState(null);
    const [mensaje, setMensaje] = useState('');

    // Como todavía no conectamos el sistema de Login completo (AuthContext),
    // pegá acá el ID de un médico de prueba de tu base de datos para probarlo ahora mismo.
    const medicoId = "69dd5a24b31d35f7b9eefdb7";

    const handleChange = e => {
        setPerfil({
            ...perfil,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();

        if ([perfil.nombre, perfil.email, perfil.especialidad].includes('')) {
            setAlerta({ msg: 'Nombre, Email y Especialidad son Obligatorios', error: true });
            return;
        }

        setCargando(true);
        setAlerta({ msg: '', error: false});

        const formData = new FormData();
        formData.append('nombre', perfil.nombre);
        formData.append('telefono', perfil.telefono);
        formData.append('especialidad', perfil.especialidad);
        formData.append('email', perfil.email);

        if (archivo) {
            formData.append('imagen', archivo);
        }

        try {
            const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/medicos/perfil/${medicoId}`, {
                method: 'POST',
                body: formData 
            });

            const resultado = await respuesta.json();

            if (respuesta.ok) {
                setAlerta({ msg: '¡Perfil actualizado correctamente! ✅', error: false });
                setArchivo(null);
                document.getElementById('input-foto').value = ''; 
            } else {
                setAlerta({ msg: resultado.msg || 'Error al actualizar', error: true });
            }
        } catch (error) {
            console.log(error);
            setAlerta({ msg: 'Error de conexión con el servidor.', error: true });
        } finally {
            setCargando(false);
        }
    };



    return (
        <div className="max-w-2xl mx-auto p-5 mt-10">
            <h2 className="text-3xl font-black text-sky-900 mb-8 text-center">Editar Mi Perfil</h2>

            <form 
                onSubmit={handleSubmit} 
                className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl px-8 pt-8 pb-10 mb-4 border border-slate-100"
            >
                {/* Alerta Visual */}
                {alerta.msg && (
                    <div className={`p-4 mb-6 rounded-xl font-bold text-center ${alerta.error ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                        {alerta.msg}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Campo: Nombre */}
                    <div className="flex flex-col">
                        <label className="text-slate-500 text-xs font-bold uppercase mb-2">Nombre completo</label>
                        <input 
                            type="text" 
                            name="nombre" 
                            value={perfil.nombre} 
                            onChange={handleChange}
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-sky-500"
                        />
                    </div>

                    {/* Campo: Email */}
                    <div className="flex flex-col">
                        <label className="text-slate-500 text-xs font-bold uppercase mb-2">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={perfil.email} 
                            onChange={handleChange}
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-sky-500"
                        />
                    </div>

                    {/* Campo: Especialidad */}
                    <div className="flex flex-col">
                        <label className="text-slate-500 text-xs font-bold uppercase mb-2">Especialidad</label>
                        <input 
                            type="text" 
                            name="especialidad" 
                            value={perfil.especialidad} 
                            onChange={handleChange}
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-sky-500"
                        />
                    </div>

                    {/* Campo: Teléfono */}
                    <div className="flex flex-col">
                        <label className="text-slate-500 text-xs font-bold uppercase mb-2">Teléfono</label>
                        <input 
                            type="tel" 
                            name="telefono" 
                            value={perfil.telefono} 
                            onChange={handleChange}
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-sky-500"
                        />
                    </div>
                </div>

                {/* Campo: Foto de Perfil */}
                <div className="mt-8 mb-8 p-6 bg-sky-50 rounded-xl border border-sky-100">
                    <label className="block text-sky-800 text-sm font-bold mb-4">Nueva Foto de Perfil (Opcional)</label>
                    <input 
                        id="input-foto"
                        type="file" 
                        accept="image/jpeg, image/png, image/webp"
                        onChange={e => setArchivo(e.target.files[0])}
                        className="block w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-5 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-sky-600 file:text-white hover:file:bg-sky-700 cursor-pointer transition-colors"
                    />
                </div>

                <button 
                    type="submit" 
                    disabled={cargando}
                    className={`w-full font-bold py-4 px-4 rounded-xl transition-colors uppercase tracking-wide
                        ${cargando ? 'bg-slate-300 text-slate-500 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600 text-white shadow-md'}`}
                >
                    {cargando ? 'Guardando Cambios...' : 'Guardar Cambios'}
                </button>
            </form>
        </div>
    );
};

export default EditarPerfil;