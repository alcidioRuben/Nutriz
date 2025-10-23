import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import SobreNos from './pages/SobreNos';
import Contactos from './pages/Contactos';
import Galeria from './pages/Galeria';
import Loja from './pages/Loja';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
            <Route path="/contactos" element={<Contactos />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/loja" element={<Loja />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
