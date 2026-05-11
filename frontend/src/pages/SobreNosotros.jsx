import { Link } from 'react-router-dom';
import ParallaxHero from '../components/SobreNosotros/ParallaxHero';
import Historia from '../components/SobreNosotros/Historia';
import Estadisticas from '../components/SobreNosotros/Estadisticas';
import PuenteEquipo from '../components/SobreNosotros/PuenteEquipo';
import Testimonios from '../components/SobreNosotros/Testimonios';
import FormularioTestimonio from '../components/SobreNosotros/FormularioTestimonio';

const SobreNosotros = () => {
    return (
        <div className="min-h-screen bg-slate-50 pb-16">

            <ParallaxHero 
                imagenUrl="https://res.cloudinary.com/dao3dvi3g/image/upload/q_auto/f_auto/v1778510473/medicalParallax_vgihxd.webp" 
            />

            <div className="max-w-5xl mx-auto px-6 pt-16 space-y-24">
                
                {/* Contenido Principal */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">
                    <div className="md:w-1/2 bg-sky-50 flex items-center justify-center p-12">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-32 h-32 text-sky-300 transform transition-transform hover:scale-110 duration-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </div>
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-6">
                        <h2 className="text-2xl font-bold text-slate-800">Compromiso con tu salud</h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <p>
                                Nacimos con un propósito claro: transformar la experiencia de ir al médico. Dejamos atrás las largas esperas y los trámites engorrosos para ofrecerte una plataforma ágil y profesionales de primer nivel.
                            </p>
                            <p>
                                Contamos con un equipo interdisciplinario preparado para brindarte un diagnóstico preciso y un tratamiento cálido, siempre poniendo al paciente en el centro de nuestras decisiones.
                            </p>
                        </div>
                    </div>
                </div>

                <Historia />

                <Estadisticas />

                <PuenteEquipo />
                
                <div className="space-y-16">
                    <Testimonios />
                    <FormularioTestimonio />
                </div>

                {/* 5. CTA Final */}
                <div className="text-center pt-16 border-t border-slate-200">
                    <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-6">¿Listo para priorizar tu bienestar?</h3>
                    <Link to="/agendar" className="inline-block bg-sky-600 text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest shadow-xl shadow-sky-600/30 hover:bg-sky-700 hover:shadow-sky-700/40 transition-all hover:-translate-y-1">
                        Agendar una consulta
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default SobreNosotros;