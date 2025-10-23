import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/sobre-nos" className="hover:text-primary transition-colors">Sobre-Nos</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Copyright Notice</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <FaPhone className="inline mr-2 text-primary" />
              +258 86 4260 236
            </h3>
            <p className="text-gray-400">Suporte 24/7</p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Quer receber dicas exclusivas de nutrição, bem-estar e saúde diretamente no seu e-mail? 
              Subscreva a nossa <strong>Newsletter</strong> e tenha acesso a conteúdos personalizados, 
              receitas saudáveis, insights de especialistas e muito mais!
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Seu email" 
                className="flex-1 px-4 py-2 rounded-lg text-gray-900"
              />
              <button className="btn-primary">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 desenvolvido pela dev.pratico
          </p>
          <div className="flex gap-4">
            <a href="#" className="bg-primary p-3 rounded-full hover:bg-secondary transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-primary p-3 rounded-full hover:bg-secondary transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="bg-primary p-3 rounded-full hover:bg-secondary transition-colors">
              <FaPinterestP />
            </a>
            <a href="#" className="bg-primary p-3 rounded-full hover:bg-secondary transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Floating Call Button */}
        <a 
          href="tel:+258864260236" 
          className="fixed bottom-8 right-8 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-secondary transition-all transform hover:scale-110 z-40"
        >
          <FaPhone className="text-2xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;


