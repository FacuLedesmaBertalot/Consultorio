const Historia = () => {

    const hitosHistoria = [
        {
            fecha: "2009",
            tituloHito: "El Origen",
            texto: "Todo comenzó con un consultorio pequeño y un gran sueño: ofrecer una medicina donde el paciente no fuera un número más, sino una persona escuchada, contenida y tratada con dignidad."
        },
        {
            fecha: "2014",
            tituloHito: "Crecimiento y Equipo",
            texto: "Gracias al boca a boca de nuestros pacientes, crecimos. Sumamos nuevas especialidades y formamos un equipo de profesionales que compartían nuestra filosofía de empatía y excelencia médica."
        },
        {
            fecha: "2019",
            tituloHito: "Salto Tecnológico",
            texto: "Incorporamos equipamiento de última generación y digitalizamos nuestros procesos, eliminando las historias clínicas de papel para que tu información esté siempre segura, accesible y centralizada."
        },
        {
            fecha: "2022",
            tituloHito: "Referente Regional",
            texto: "Nos convertimos en un referente de salud integral en la región, brindando diagnósticos precisos sin perder la esencia humana, atendiendo a miles de familias que nos eligen generación tras generación."
        },
        {
            fecha: "HOY",
            tituloHito: "Nuestro Compromiso",
            texto: "Mirando hacia el futuro, seguimos innovando y ampliando nuestras instalaciones, pero manteniendo siempre intacta la calidez humana que nos vio nacer y que nos define cada día."
        }
    ];

    return (
        <div className="bg-white rounded-4xl shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100 p-8 md:p-14 relative z-10 hover:cursor-default">
            
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-50 rounded-full opacity-60 blur-3xl -z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-50 rounded-full opacity-50 blur-3xl -z-10 pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row gap-16 items-start">
                
                <div className="lg:w-2/5 lg:sticky lg:top-32 space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="space-y-3">
                        <div className="bg-sky-50 w-16 h-16 rounded-2xl flex items-center justify-center text-sky-600 shadow-inner border border-sky-100">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h2 className="text-4xl font-black text-slate-800 tracking-tight leading-none">Nuestra <span className="text-sky-600">Historia</span></h2>
                        <p className="text-slate-500 font-medium">De un sueño a la realidad.</p>
                    </div>

                    <div className="w-full aspect-4/3 rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                        <img 
                            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop" 
                            alt="Interior moderno y cálido de la clínica VitaeSalud" 
                            className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                        />
                    </div>
                </div>

                <div className="lg:w-3/5 space-y-10 relative">
                    
                    <div className="absolute w-0.5 h-[calc(100%-20px)] bg-slate-100 left-1.5 top-4 md:left-2.25"></div>

                    {hitosHistoria.map((hito, index) => (
                        <div key={index} className="group relative flex gap-6 md:gap-8 items-start pl-8 md:pl-12 transition-all duration-300">
                            
                            <div className={`absolute w-3.5 h-3.5 md:w-5 md:h-5 rounded-full border-4 border-white transition-colors duration-300 -left-0.5 md:left-0 top-1.5 z-10 
                                ${index === hitosHistoria.length - 1 
                                    ? 'bg-orange-400 group-hover:bg-orange-500' 
                                    : 'bg-slate-200 group-hover:bg-sky-500'
                                }`}
                            ></div>

                            <div className="flex-none w-16 pt-1 text-center">
                                <p className={`text-xl font-extrabold transition-colors duration-300 group-hover:text-sky-600 
                                    ${index === hitosHistoria.length - 1 ? 'text-orange-500' : 'text-slate-400'}`}>
                                    {hito.fecha}
                                </p>
                            </div>

                            <div className="space-y-1 flex-1">
                                <h4 className="font-bold text-slate-800 transition-colors group-hover:text-sky-700">{hito.tituloHito}</h4>
                                <p className={`text-slate-600 leading-relaxed transition-colors group-hover:text-slate-900 
                                    ${index === 0 ? 'text-lg font-medium text-slate-700' : 'text-base'}`}>
                                    {hito.texto}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    );
};

export default Historia;