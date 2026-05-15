import { useState } from 'react';
import { getFAQ } from '../services/faqService';

export const useFAQ = () => {
    const [busqueda, setBusqueda] = useState('');
    const [idAbierto, setIdAbierto] = useState(null);
    
    const todasLasFaqs = getFAQ();
    
    const faqsFiltradas = todasLasFaqs.filter(faq => 
        faq.pregunta.toLowerCase().includes(busqueda.toLowerCase()) || 
        faq.categoria.toLowerCase().includes(busqueda.toLowerCase()) ||
        faq.respuesta.toLowerCase().includes(busqueda.toLowerCase())
    );

    const toggleFaq = (id) => setIdAbierto(idAbierto === id ? null : id);

    const handleBusqueda = (termino) => {
        setBusqueda(termino);
        setIdAbierto(null);
    };

    return { busqueda, handleBusqueda, faqsFiltradas, idAbierto, toggleFaq };
};


