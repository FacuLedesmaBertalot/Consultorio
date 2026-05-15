const FAQItem = ({ faq, isOpen, onToggle }) => (
    <div className={`group transition-all duration-300 ${isOpen ? 'bg-slate-50/30' : ''}`}>
        <button 
            onClick={onToggle}
            className="w-full p-6 text-left flex justify-between items-center cursor-pointer hover:bg-slate-50/50 transition-colors"
        >
            <div className="pr-4">
                <div className="flex items-center gap-3 mb-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{faq.categoria}</span>
                </div>
                <h3 className={`font-bold text-lg md:text-xl transition-colors ${isOpen ? 'text-sky-700' : 'text-slate-700'}`}>
                    {faq.pregunta}
                </h3>
            </div>
            <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-sky-700 text-white rotate-135' : 'bg-slate-50 text-slate-400 group-hover:bg-sky-50 group-hover:text-sky-600'}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
            </div>
        </button>
        <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="px-10 pb-8 text-slate-500 leading-relaxed text-lg pt-2">
                {faq.respuesta}
            </div>
        </div>
    </div>
);

export default FAQItem;