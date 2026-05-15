import { useFAQ } from '../hooks/useFAQ';
import FAQSearch from '../components/FAQ/FAQSearch';
import FAQList from '../components/FAQ/FAQList';

const FAQ = () => {
    const { busqueda, handleBusqueda, faqsFiltradas, idAbierto, toggleFaq } = useFAQ();
    const categorias = ['Turnos', 'Seguridad', 'Cancelaciones', 'Costos'];

    const urlImagen = "https://res.cloudinary.com/dao3dvi3g/image/upload/q_auto/f_auto/v1778880872/05d88a27-79aa-41a2-84f5-91e5b5eb36ff_ep6lgc.jpg";

    return (
        <div className="min-h-screen bg-white">
            <header className="relative w-full h-120 md:h-140 flex items-center overflow-hidden bg-slate-50/50 border-b border-slate-100">
                
                <div className="absolute inset-0 z-0 flex justify-end">
                    <div 
                        className="relative w-full md:w-1/2 h-full"
                        style={{
                            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%)',
                            maskImage: 'linear-gradient(to right, transparent 0%, black 30%)',
                        }}
                    >
                        <img 
                            src={urlImagen} 
                            alt="Soporte VitaeSalud"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </div>

                <div className="absolute top-0 left-0 w-80 h-80 bg-slate-200/10 rounded-full blur-[120px] -ml-40 -mt-20 pointer-events-none"></div>

                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <div className="max-w-xl text-left">
                        <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                            Centro de <br />
                            <span className="text-sky-600">Ayuda</span>
                        </h1>
                    <div className="mt-6 md:mt-16">
                        <p className="text-slate-800 text-lg md:text-xl font-medium max-w-lg leading-relaxed">
                            Encontrá respuestas rápidas para gestionar tus citas en <span className="text-sky-700 font-bold">VitaeSalud</span>.
                        </p>
                    </div>
                    </div>
                </div>
            </header>

            <main className="pb-20">
                <FAQSearch 
                    busqueda={busqueda} 
                    handleBusqueda={handleBusqueda} 
                    categorias={categorias} 
                />

                <div className="max-w-3xl mx-auto px-6">
                    <FAQList 
                        faqs={faqsFiltradas} 
                        idAbierto={idAbierto} 
                        toggleFaq={toggleFaq} 
                        busqueda={busqueda}
                        handleBusqueda={handleBusqueda}
                    />
                </div>
            </main>
        </div>
    );
};

export default FAQ;