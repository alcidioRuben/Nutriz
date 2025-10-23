import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [logoUrl, setLogoUrl] = useState('https://drive.google.com/uc?export=download&id=1-CU-fWf8-6nd7Oe5WhptcDr1bKHFdji1');
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Detectar se está fazendo scroll para baixo ou para cima
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scroll para baixo - esconder header
        setIsVisible(false);
      } else {
        // Scroll para cima - mostrar header
        setIsVisible(true);
      }
      
      // Detectar se passou do topo
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleLogoError = () => {
    console.log('Erro ao carregar logo, tentando alternativas...');
    if (logoUrl.includes('export=download')) {
      setLogoUrl('https://drive.google.com/thumbnail?id=1-CU-fWf8-6nd7Oe5WhptcDr1bKHFdji1&sz=w128');
    } else if (logoUrl.includes('thumbnail')) {
      setLogoUrl('https://drive.google.com/uc?export=view&id=1-CU-fWf8-6nd7Oe5WhptcDr1bKHFdji1');
    } else if (logoUrl.includes('export=view')) {
      setLogoUrl('https://drive.google.com/file/d/1-CU-fWf8-6nd7Oe5WhptcDr1bKHFdji1/preview');
    } else {
      console.log('Todas as tentativas falharam, usando fallback');
      setLogoError(true);
    }
  };

  return (
    <header className={`bg-white shadow-md fixed w-full top-0 z-50 transition-transform duration-300 header-stable ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
      <div className="container mx-auto px-2 sm:px-4">

        {/* Main Navigation */}
         <nav className="flex justify-between items-center py-2 sm:py-3 md:py-4">
           <Link to="/" className="flex items-center gap-2 sm:gap-3 md:gap-4 hover:opacity-80 transition-opacity">
            <div className="relative">
               {!logoError ? (
                 <img 
                   src={logoUrl} 
                   alt="Nutriz Consultórios Logo" 
                   className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 object-contain rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                   onError={handleLogoError}
                   onLoad={() => {
                     console.log('Logo carregado com sucesso!');
                   }}
                 />
               ) : (
                 <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg">
                   NC
                 </div>
               )}
            </div>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">
              <span className="text-blue-600">Nutriz</span> <span className="text-gray-800">Consultórios</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-3 lg:gap-6">
            <li><Link to="/" className="hover:text-primary transition-colors text-sm lg:text-base">Home</Link></li>
            <li><Link to="/servicos" className="hover:text-primary transition-colors text-sm lg:text-base">Serviços</Link></li>
            <li><Link to="/portfolio" className="hover:text-primary transition-colors text-sm lg:text-base">Portfólio</Link></li>
            <li><Link to="/galeria" className="hover:text-primary transition-colors text-sm lg:text-base">Depoimentos</Link></li>
            <li><Link to="/loja" className="hover:text-primary transition-colors text-sm lg:text-base">Equipamentos Médicos</Link></li>
            <li><Link to="/sobre-nos" className="hover:text-primary transition-colors text-sm lg:text-base">Sobre-nos</Link></li>
            <li><Link to="/contactos" className="hover:text-primary transition-colors text-sm lg:text-base">Contactos</Link></li>
          </ul>

          <div className="flex items-center gap-2">
            <Link to="/contactos" className="hidden md:block btn-primary text-xs lg:text-sm px-2 py-1">
              Pedir Orçamento
            </Link>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="md:hidden text-base sm:text-lg">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-2">
            <ul className="flex flex-col gap-1 sm:gap-2">
              <li><Link to="/" onClick={toggleMenu} className="block py-1.5 hover:text-primary text-sm">Home</Link></li>
              <li><Link to="/servicos" onClick={toggleMenu} className="block py-1.5 hover:text-primary text-sm">Serviços</Link></li>
              <li><Link to="/portfolio" onClick={toggleMenu} className="block py-1.5 hover:text-primary text-sm">Portfólio</Link></li>
              <li><Link to="/galeria" onClick={toggleMenu} className="block py-1.5 hover:text-primary text-sm">Depoimentos</Link></li>
              <li><Link to="/loja" onClick={toggleMenu} className="block py-1.5 hover:text-primary text-sm">Equipamentos Médicos</Link></li>
              <li><Link to="/sobre-nos" onClick={toggleMenu} className="block py-1.5 hover:text-primary text-sm">Sobre-nos</Link></li>
              <li><Link to="/contactos" onClick={toggleMenu} className="block py-1.5 hover:text-primary text-sm">Contactos</Link></li>
              <li><Link to="/contactos" onClick={toggleMenu} className="btn-primary inline-block text-center text-xs px-3 py-2">Pedir Orçamento</Link></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


