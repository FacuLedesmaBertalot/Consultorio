const ParallaxHero = ({ imagenUrl }) => {
    return (
        <div className="w-full relative flex flex-col md:block md:h-[calc(100vh-80px)] bg-sky-950 overflow-hidden">

            <div 
                className="w-full aspect-video md:aspect-auto md:absolute md:inset-0 bg-cover bg-top bg-no-repeat bg-scroll md:bg-fixed"
                style={{ backgroundImage: `url(${imagenUrl})` }}
            >
                <div className="hidden md:block absolute inset-0 bg-sky-950/40"></div>
            </div>

            {/* Móvil: Fluye naturalmente abajo con padding. PC: Se centra sobre la imagen. */}
            <div className="relative w-full px-6 py-12 md:py-0 flex flex-col items-center justify-center text-center md:h-full z-10 space-y-4">
                <h2 className="text-4xl sm:text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">
                    Innovación y <br className="md:hidden" />
                    <span className="text-orange-400">Calidez</span>
                </h2>
                <p className="text-lg sm:text-xl md:text-3xl text-sky-100/90 font-semibold max-w-xl mx-auto">
                    Cuidamos de ti y tu familia en cada consulta.
                </p>
            </div>
            
        </div>
    );
};

export default ParallaxHero;