import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='min-h-screen bg-slate-50'>

        <main className='container mx-auto mt-auto p-5 lg:flex items-center gap-16'>

            <div className='lg:w-1/2'>
                <h1 className='text-5xl md:text-6xl font-extrabold text-slate-800 leading-tight'>
                    Cuidamos tu salud con <span className="text-sky-600">profesionalismo</span> y <span className="text-orange-500">calidez</span>
                </h1>
                <p className='text-lg text-slate-600 mt-8 leading-relaxed'>
                    Reserva tu turno online en pocos pasos. Elegí tu especialista y el horario que mejor te convenga, sin esperas telefónicas.
                </p>

                <div className='mt-12 flex flex-col sm:flex-row gap-4'>
                    <Link
                        to='/agendar'
                        className='bg-sky-600 text-white px-8 py-4 rounded-lg font-bold uppercase text-center hover:bg-sky-700 transition-all shadow-md hover:shadow-lg'
                    >Agendar Turno</Link>

                    <Link
                        to='/especialistas'
                        className="bg-white text-sky-700 border-2 border-sky-600 px-8 py-4 rounded-lg font-bold uppercase text-center hover:bg-sky-50 transition-all"
                    >Ver Especialistas</Link>

                </div>
            </div>

<div className="lg:w-1/2 mt-12 lg:mt-0 relative w-full">
    
    <div className="hidden md:block absolute -top-4 -left-4 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
    <div className="hidden md:block absolute -bottom-8 -right-4 w-72 h-72 bg-sky-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
    
    <img 
        src="/dra.jpg" 
        alt="Doctora" 
        className="relative rounded-3xl shadow-xl w-full object-cover h-64 md:h-96 lg:h-125 border-4 md:border-8 border-white"
    />

</div>

        </main>

        <section className="container mx-auto px-5 py-24">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-sky-500">
                        <h3 className="text-sky-800 font-bold text-xl mb-3">Atención Inmediata</h3>
                        <p className="text-slate-600">Gestionamos tus turnos para que el tiempo de espera sea mínimo.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-orange-400">
                        <h3 className="text-orange-800 font-bold text-xl mb-3">Recordatorios</h3>
                        <p className="text-slate-600">Recibí notificaciones por email para no olvidar tu cita médica.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-sky-500">
                        <h3 className="text-sky-800 font-bold text-xl mb-3">Historial Online</h3>
                        <p className="text-slate-600">Acceso seguro a tus órdenes y turnos pasados desde cualquier lugar.</p>
                    </div>
                </div>
        </section>

    </div>
  );
};

export default Home;