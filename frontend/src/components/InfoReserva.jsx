const InfoReserva = () => {
    return (
        <div className='bg-sky-700 text-white lg:w-[35%] xl:w-1/3 p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden shrink-0'>
            <div className='absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-sky-600 rounded-full opacity-50 blur-3xl'></div>
            
            <div className='relative z-10'>
                <h2 className='text-2xl font-bold mb-8'>Información Importante</h2>
                <ul className='space-y-6'>
                    <li className="flex items-start gap-4">
                        <span className="text-orange-400 text-2xl mt-0.5">⏱️</span>
                        <p className="text-sky-100 text-sm leading-relaxed">Por favor, preséntate 15 minutos antes de tu turno.</p>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="text-orange-400 text-2xl mt-0.5">💳</span>
                        <p className="text-sky-100 text-sm leading-relaxed">Aceptamos todas las obras sociales y prepagas.</p>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="text-orange-400 text-2xl mt-0.5">📧</span>
                        <p className="text-sky-100 text-sm leading-relaxed">Recibirás la confirmación en tu correo electrónico.</p>
                    </li>
                </ul>
            </div>

            <div className='relative z-10 mt-12 bg-sky-800/50 p-6 rounded-2xl text-center border border-sky-600/30'>
                <p className='text-sky-200 text-sm font-semibold mb-1'>¿Tenés Dudas?</p>
                <p className='text-white font-black text-xl tracking-wide'>+54 11 1234-5678</p>
            </div>
        </div>
    );
};

export default InfoReserva;