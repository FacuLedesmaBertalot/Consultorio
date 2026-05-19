import { Link } from 'react-router-dom';

const EspecialidadesDestacadas = () => {
    const especialidades = [
        {
            id: 1,
            nombre: "Clínica Médica",
            descripcion: "Atención médica integral y preventiva para toda la familia.",
            valorSelect: "clinica",
            link: "/agendar",
            icono: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            id: 2,
            nombre: "Pediatría",
            descripcion: "Cuidado especializado y cálido para el crecimiento saludable de tus hijos.",
            valorSelect: "pediatria",
            link: "/agendar",
            icono: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            id: 3,
            nombre: "Cardiología",
            descripcion: "Estudios diagnósticos y tratamientos para la salud de tu corazón.",
            valorSelect: "cardiologia",
            link: "/agendar",
            icono: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            )
        },
        {
            id: 4,
            nombre: "Dermatología",
            descripcion: "Diagnóstico y tratamiento integral para el cuidado y la salud de tu piel, cabello y uñas.",     
            valorSelect: "dermatologia",       
            link: "/agendar",
            icono: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                </svg>
            )
        },
        {
            id: 5,
            nombre: "Ginecología",
            descripcion: "Atención médica especializada en todas las etapas de la vida de la mujer.",
            valorSelect: "ginecologia",
            link: "/agendar",
            icono: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        },
        {
            id: 6,
            nombre: "Traumatología",
            descripcion: "Prevención, diagnóstico y tratamiento de lesiones óseas y musculares.",
            valorSelect: "traumatologia",
            link: "/agendar",
            icono: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm4.242-8.486a3 3 0 11-4.243 4.243 3 3 0 014.243-4.243z" />
                </svg>
            )
        },
        {
            id: 7,
            nombre: "Oftalmología",
            descripcion: "Cuidado integral de tu visión, estudios diagnósticos y tratamientos oculares.",
            valorSelect: "oftalmologia",
            link: "/agendar",
            icono: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            )
        },
        {
            id: 8,
            nombre: "Nutrición",
            descripcion: "Planes de alimentación personalizados y educación nutricional para alcanzar tus metas de salud y bienestar.",     
            valorSelect: "nutricion",       
            link: "/agendar",
            icono: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4m0 0a3 3 0 01-3 3H8m4-3a3 3 0 003 3h1m-4 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8z" />
                </svg>
            )
        }
    ];

    return (
        <section className='bg-slate-100 pb-24'>
            
            <div className='relative w-full lg:h-150 mb-20 flex items-center'>
                
                <div className='absolute top-0 left-0 w-full h-100 lg:h-full lg:w-[65%]'>
                    <img 
                        src="https://res.cloudinary.com/dao3dvi3g/image/upload/q_auto/f_auto/v1779190131/EspecialidadesDestacadas_wevpm4.webp" 
                        alt="Especialidades médicas en nuestra clínica"
                        className='w-full h-full object-cover object-left' 
                    />
                    
                    <div className='hidden lg:block absolute inset-0 bg-linear-to-r from-transparent via-slate-100/50 to-slate-100'></div>
                    <div className='lg:hidden absolute inset-0 bg-linear-to-b from-transparent via-slate-100/60 to-slate-100'></div>
                </div>

                <div className='relative z-10 container mx-auto px-5 flex justify-end pt-75 lg:pt-0'>
                    <div className='lg:w-1/2 lg:pl-16 text-center lg:text-left'>
                        <h2 className='text-4xl font-extrabold text-slate-800 tracking-tight sm:text-5xl leading-tight'>
                            Nuestras <span className='text-sky-600'>Especialidades</span> Médicas <span className='text-orange-500'>Destacadas</span>
                        </h2>

                        <p className='text-lg text-slate-600 mt-8 leading-relaxed max-w-2xl mx-auto lg:mx-0'>
                            Contamos con un equipo de profesionales de primer nivel y tecnología de vanguardia listos para cuidar de vos y de tu familia. Elegí la especialidad que necesitás y agendá tu turno online en segundos.
                        </p>
                    </div>
                </div>
            </div>

            <div className='container mx-auto px-5 relative z-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {especialidades.map((esp) => (
                        <Link 
                            key={esp.id}
                            to={esp.link}
                            state={{ especialidadElegida: esp.valorSelect }}
                            className='group bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-2xl hover:border-sky-300 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between'
                        > 
                            <div>
                                <div className='w-14 h-14 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300'>
                                    {esp.icono}
                                </div>

                                <h3 className='text-xl font-bold text-slate-800 group-hover:text-sky-600 transition-colors duration-200'>
                                    {esp.nombre}
                                </h3>

                                <p className='text-slate-600 mt-3 leading-relaxed text-sm'>
                                    {esp.descripcion}
                                </p>
                            </div>

                            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-sky-600 font-semibold text-sm group-hover:text-sky-700">
                                Reservar Turno
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EspecialidadesDestacadas;