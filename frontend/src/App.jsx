import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';
import RutaProtegida from './layouts/RutaProtegida';

// Páginas Públicas
import Home from './pages/Home';
import Agendar from './pages/Agendar';
import Especialistas from './pages/Especialistas';
import SobreNosotros from './pages/SobreNosotros';
import FAQ from './pages/FAQ';

// Páginas de Autenticación
import Login from './pages/Login';
import Registrar from './pages/Registrar';
import ConfirmarCuenta from './pages/ConfirmarCuenta';
import OlvidePassword from './pages/OlvidePassword';
import NuevoPassword from './pages/NuevoPassword';

// Páginas privadas
import Admin from './pages/Admin';
import EditarPerfil from './pages/EditarPerfil';
import SuperAdmin from './pages/SuperAdmin';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* ÁREA PÚBLICA: PACIENTES */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="agendar" element={<Agendar />} />
          <Route path="especialistas" element={<Especialistas />} />
          <Route path="sobre-nosotros" element={<SobreNosotros />} />
          <Route path="faq" element={<FAQ /> } />
        </Route>

        {/* ÁREA DE AUTENTICACIÓN: MÉDICOS */}
        <Route path="/login" element={<Login />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/confirmar/:id" element={<ConfirmarCuenta />} />
        <Route path="/olvide-password" element={<OlvidePassword />} />
        <Route path="/olvide-password/:token" element={<NuevoPassword />} />

        {/* ÁREA PRIVADA: PANEL DE ADMINISTRACIÓN (Protegida por Token) */}
        <Route path="/admin" element={<RutaProtegida />}>

          <Route index element={<Admin />} />
          <Route path="maestro" element={<SuperAdmin />} />
          
          <Route path="perfil" element={<EditarPerfil />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;