import useAgendar from '../hooks/useAgendar';
import InfoReserva from '../components/InfoReserva';
import FormularioReserva from '../components/FormularioReserva';

const Agendar = () => {
    const datosAgendar = useAgendar();

    return (
        <div className='container mx-auto px-4 sm:px-6 py-12 max-w-7xl'>
            
            <div className='text-center mb-12'>
                <h1 className='text-4xl md:text-5xl font-black text-sky-800 mb-4'>
                    Reserva tu <span className='text-orange-600'>Cita Médica</span>
                </h1>
                <p className='text-slate-600 text-lg max-w-2xl mx-auto'>
                    Gestiona tu turno de forma rápida y sencilla.
                </p>
            </div>

            <div className='bg-white shadow-2xl rounded-3xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row'>
                
                <InfoReserva />
                
                <FormularioReserva {...datosAgendar} />

            </div>
        </div>
    );
};

export default Agendar;