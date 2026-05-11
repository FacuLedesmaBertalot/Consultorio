import { Link } from 'react-router-dom';

const PuenteEquipo = () => {
    return (
        <div className="bg-sky-900 rounded-3xl p-10 md:p-16 text-center shadow-xl relative overflow-hidden">
            <div 
                className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
                style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px" }}
            ></div>
            
            <div className="relative z-10 space-y-6">
                <h2 className="text-3xl md:text-4xl font-black text-white ">
                    Conocé a quienes te cuidan
                </h2>
                <p className="text-sky-100 max-w-2xl mx-auto text-lg">
                    Detrás de nuestra tecnología hay un equipo humano de excelencia. Médicos especialistas dedicados a brindarte la mejor atención.
                </p>
                <Link 
                    to="/especialistas" 
                    className="inline-block mt-4 bg-white text-sky-900 px-8 py-3 rounded-xl font-bold uppercase  hover:bg-sky-100"
                >
                    Ver cuerpo médico
                </Link>
            </div>
        </div>
    );
};

export default PuenteEquipo;