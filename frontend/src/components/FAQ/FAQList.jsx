import FAQItem from './FAQItem';

const FAQList = ({ faqs, idAbierto, toggleFaq, busqueda, handleBusqueda }) => {
    return (
        <div className="bg-white rounded-4xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden divide-y divide-slate-50">
            {faqs.length > 0 ? (
                faqs.map(faq => (
                    <FAQItem 
                        key={faq.id} 
                        faq={faq} 
                        isOpen={idAbierto === faq.id} 
                        onToggle={() => toggleFaq(faq.id)} 
                    />
                ))
            ) : (
                <div className="text-center py-20 bg-white relative overflow-hidden">
                    <div className="relative z-10 px-6">
                        <h3 className="text-4xl font-black text-slate-800 mb-2 tracking-tight">
                            No hay coincidencias
                        </h3>
                        <p className="text-slate-500 mb-10 max-w-xs mx-auto text-lg leading-relaxed">
                            No pudimos encontrar nada para <span className="font-bold text-sky-600 italic">"{busqueda}"</span>.
                        </p>
                        <button 
                            onClick={() => handleBusqueda('')}
                            className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold uppercase text-xs tracking-[0.2em] hover:bg-sky-700 transition-all duration-300 shadow-lg shadow-slate-200 active:scale-95 cursor-pointer"
                        >
                            Ver todas las preguntas
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FAQList;