const ObraSocialCarrousel = () => {
    const obrasSociales = [
        {
            id: 1,
            nombre: "OSDE",
            logo: "https://res.cloudinary.com/dao3dvi3g/image/upload/q_auto/f_auto/v1779137349/OSDE_f6qwtm.png"
        },
        {
            id: 2,
            nombre: "Swiss Medical",
            logo: "https://res.cloudinary.com/dao3dvi3g/image/upload/q_auto/f_auto/v1779134498/SwissMedical_gkdqdm.png"
        },
        {
            id: 3,
            nombre: "Galeno",
            logo: "https://res.cloudinary.com/dao3dvi3g/image/upload/q_auto/f_auto/v1779140122/Galeno_tlb5zq.png"
        },
        {
            id: 4,
            nombre: "Medifé",
            logo: "https://res.cloudinary.com/dao3dvi3g/image/upload/q_auto/f_auto/v1779138355/Medife_fdcal8.avif"
        },
        {
            id: 5,
            nombre: "Sancor Salud",
            logo: "https://res.cloudinary.com/dao3dvi3g/image/upload/q_auto/f_auto/v1779135535/SancorSalud_nkbtjf.webp"
        },
        {
            id: 6,
            nombre: "PAMI",
            logo: "https://res.cloudinary.com/dao3dvi3g/image/upload/q_auto/f_auto/v1779134841/Pami_yof9uh.svg"
        },
        {
            id: 7,
            nombre: "IOMA",
            logo: "https://res.cloudinary.com/dao3dvi3g/image/upload/q_auto/f_auto/v1779136907/IOMA_g94bjg.svg"
        },
        {
            id: 8,
            nombre: "Omint",
            logo: "https://res.cloudinary.com/dao3dvi3g/image/upload/q_auto/f_auto/v1779140246/Omint_oepbvq.png"
        },
    ];

    return (
        <section className="py-16 bg-white border-y border-slate-200 overflow-hidden">

            <style>{` 
                @keyframes slide-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0%); }
                }
                .cinta-animada {
                    animation: slide-right 25s linear infinite;
                    width: max-content;
                }
                
                @media (hover: hover) {
                    .contenedor-carrusel:hover .cinta-animada {
                        animation-play-state: paused;
                    }
                }

                @media (hover: none) {
                    .contenedor-carrusel img {
                        filter: grayscale(0) !important;
                    }
                }
            `}</style>

            <div className="container mx-auto px-5 mb-12 text-center">
                <h2 className="text-4xl font-extrabold text-orange-600 tracking-tight">Trabajamos con las principales Obras Sociales y Prepagas</h2>
                <p className="text-lg text-slate-800 mt-3 max-w-2xl mx-auto">Atención médica integral con el respaldo de las coberturas de primer nivel en el país.</p>
            </div>

            <div className="relative flex overflow-x-hidden contenedor-carrusel cursor-pointer py-4">

                <div className="absolute top-0 left-0 w-32 h-full bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>

                <div className="absolute top-0 right-0 w-32 h-full bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>

                <div className="cinta-animada flex items-center">
                    {[...obrasSociales, ...obrasSociales].map((obra, index) => (
                        <div 
                            key={`${obra.id}-${index}`} 
                            className="overflow-hidden flex items-center justify-center bg-white border border-slate-100 rounded-2xl mx-5 p-4 shadow-md w-56 h-32 transition-all duration-200 hover:border-sky-300 hover:shadow-xl hover:bg-sky-50 hover:-translate-y-1"
                        >
                            <img 
                                src={obra.logo} 
                                alt={`Logo de ${obra.nombre}`}
                                className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-200" 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ObraSocialCarrousel;