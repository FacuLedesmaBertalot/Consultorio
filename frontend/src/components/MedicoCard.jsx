import { Link } from 'react-router-dom';

const MedicoCard = ({ medico }) => {
    const { _id, nombre, especialidad } = medico;

    const especialidadNormalizada = especialidad.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    return (
        <div className="bg-white rounded-3xl shadow border-b-slate-100 overflow-hidden group">

        <div className="bg-sky-700 h-20 relative flex justify-center">
            <div className="absolute -bottom-10 w-24 h-24 bg-orange-50 rounded-full border-4 border-white flex items-center justify-center shadow-sm overflow-hidden">
                
                {medico.imagen ? (
                    <img 
                        src={medico.imagen} 
                        alt={`Foto de ${nombre}`} 
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <span className="text-4xl font-black text-orange-500">
                        {nombre.charAt(0).toUpperCase()}
                    </span>
                )}
                
            </div>
        </div>

            <div className="pt-16 pb-8 px-6 text-center">
                <h3 className="text-xl font-bold text-sky-900 mb-2 truncate" title={`Dr/a. ${nombre}`}>Dr/a {nombre}</h3>
            </div>

            <span className="inline-block bg-sky-50 text-sky-700 font-semibold px-4 py-1.5 rounded-full text-xs tracking-wider uppercase mb-5 border border-sky-100">{especialidad}
            </span>

            <Link 
                to="/agendar"
                state={{ 
                    especialidadPrevia: especialidadNormalizada, 
                    profesionalPrevio: _id 
                }}
                className="inline-block text-center w-full py-3.5 bg-orange-100 text-orange-600 font-bold rounded-xl hover:bg-orange-500 hover:text-white transition-colors duration-300 shadow-sm"
            >
                Solicitar Turno
            </Link>

        </div>
    );
};

export default MedicoCard;