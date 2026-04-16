const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12">
            <div className="container mx-auto px-10 grid md:grid-cols-3 gap-10">
                <div>
                    <h3 className="text-white text-xl font-bold mb-4">
                        Vitae<span className="text-orange-500">Salud</span>
                    </h3>
                    <p className="text-sm leading-relaxed">
                        Brindando atención médica de excelencia con calidez humana. Tu salud es nuestra prioridad número uno.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-widest">Atención</h4>
                    <ul className="text-sm space-y-2">
                        <li>Lunes a Viernes: 08:00 - 20:00</li>
                        <li>Sábados: 09:00 - 13:00</li>
                        <li className="text-orange-400 font-semibold">Emergencias 24hs</li>
                    </ul>
                </div>

                {/* Contacto */}
                <div>
                    <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-widest">Contacto</h4>
                    <p className="text-sm">Av. Principal 123, CABA</p>
                    <p className="text-sm">Tel: +54 11 1234-5678</p>
                    <p className="text-sm">Email: contacto@tuconsultorio.com</p>
                </div>
            </div>

            <div className="border-t border-slate-800 mt-10 pt-6 text-center text-xs uppercase tracking-widest text-slate-500">
                &copy; {new Date().getFullYear()} VitaeSalud - Todos los derechos reservados
            </div>
        </footer>
    );
};

export default Footer;