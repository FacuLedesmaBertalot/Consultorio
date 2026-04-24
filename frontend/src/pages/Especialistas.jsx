import MedicoCard from "../components/MedicoCard";
import SubirFoto from "../components/SubirFoto";
import useEspecialistas from "../hooks/useEspecialistas";


const Especialistas = () => {
    const { medicos, cargando } = useEspecialistas();

    return (
        <div className="container mx-auto px-4 sm:px-6 py-16 max-w-7xl">

            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-black text-sky-800 mb-5">
                    Nuestro <span className="text-orange-500">Equipo Médico</span>
                </h1>
                <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                    Contamos con profesionales de primer nivel en diversas especialidades,comprometidos con brindarte la mejor atención.
                </p>
            </div>

            {cargando ? (
                <div className="flex flex-col items-center justify-center py-20 opacity-70 animate-pulse">
                    <div className="w-16 h-16 border-4 border-slate-200 border-t-orange-500 rounded-full animate-spin mb-4"></div>
                    <p className="text-sky-800 text-lg font-bold">Cargando profesionales...</p>
                </div>
            ) : medicos.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
                    {medicos.map(medico => (
                        <MedicoCard
                            key={medico._id}
                            medico={medico}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-24 bg-slate-50 rounded-3xl border border-slate-200 shadow-inner">
                    <span className="text-5xl mb-4 block">👨‍⚕️</span>
                    <h3 className="text-2xl font-bold text-sky-900 mb-2">Aún no hay especialistas</h3>
                    <p className="text-slate-500 text-lg max-w-md mx-auto">
                        Pronto estaremos sumando nuevos profesionales a nuestra cartilla médica.
                    </p>
                </div>
            )}

        </div>
    );
};

export default Especialistas;