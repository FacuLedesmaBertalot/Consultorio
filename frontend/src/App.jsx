import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Registrar from './pages/Registrar';
import Agendar from './pages/Agendar';
import Especialistas from './pages/Especialistas';
import EditarPerfil from './pages/EditarPerfil';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="agendar" element={<Agendar />} />
          <Route path="especialistas" element={<Especialistas />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/registrar" element={<Registrar />} />

        <Route path="/editar-perfil" element={<EditarPerfil />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;