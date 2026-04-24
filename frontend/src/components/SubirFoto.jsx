import { useState } from 'react';

const SubirFoto = ({ medicoId, alSubir }) => {
    const [archivo, setArchivo] = useState(null);
    const [cargando, setCargando] = useState(false);
    const [mensaje, setMensaje] = useState('');

    // Esta función atrapa la foto cuando el usuario la selecciona en su PC
    const manejarArchivo = (e) => {
        setArchivo(e.target.files[0]);
        setMensaje('');
    };

    // Esta función envía la foto al backend cuando aprieta "Subir"
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!archivo) {
            setMensaje('Por favor selecciona una imagen primero.');
            return;
        }

        setCargando(true);

        const formData = new FormData();
        formData.append('imagen', archivo); 

        try {
            const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/medicos/perfil/${medicoId}`, {
                method: 'POST',
                body: formData
            });

            const resultado = await respuesta.json();

            if (respuesta.ok) {
                setMensaje('¡Foto subida con éxito! ✅');
                setArchivo(null);
                
                if(alSubir) alSubir(); 
            } else {
                setMensaje(resultado.msg || 'Error al subir la foto.');
            }

        } catch (error) {
            console.log(error);
            setMensaje('Error de conexión al subir la foto.');
        } finally {
            setCargando(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm max-w-md mx-auto">
            <h4 className="text-sky-800 font-bold mb-4">Actualizar Foto de Perfil</h4>
            
            <input 
                type="file" 
                accept="image/jpeg, image/png, image/webp"
                onChange={manejarArchivo}
                className="block w-full text-sm text-slate-500 mb-4
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-sky-50 file:text-sky-700
                    hover:file:bg-sky-100 transition-all cursor-pointer"
            />

            <button 
                type="submit" 
                disabled={!archivo || cargando}
                className={`w-full py-2.5 rounded-xl font-bold text-white transition-colors
                    ${(!archivo || cargando) ? 'bg-slate-300 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600 shadow-md'}`}
            >
                {cargando ? 'Subiendo a la nube... ☁️' : 'Subir Foto'}
            </button>

            {mensaje && (
                <p className={`mt-4 text-sm font-medium text-center ${mensaje.includes('éxito') ? 'text-green-600' : 'text-red-500'}`}>
                    {mensaje}
                </p>
            )}
        </form>
    );
};

export default SubirFoto;