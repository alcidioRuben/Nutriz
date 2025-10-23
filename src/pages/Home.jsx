import { Link } from 'react-router-dom';
import { FaAppleAlt, FaCheckCircle, FaUserMd, FaHeart, FaLeaf, FaPhone } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [imageError, setImageError] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Dados das atividades
  const activities = [
    {
      id: 1,
      title: "Consultoria Nutricional",
      description: "Sessões personalizadas de avaliação e orientação nutricional",
      image: "https://drive.google.com/thumbnail?id=13UBXP49p2Q1dgzx4UsMo9Yr_k6X7rKz1&sz=w400",
      color: "primary",
      badge: "Atividade"
    },
    {
      id: 2,
      title: "Workshop de Alimentação",
      description: "Workshops educativos sobre alimentação saudável e sustentável",
      image: "https://drive.google.com/thumbnail?id=1Ga0TPmnsy4aEDhLVIJTPXtZAiVsnfjQ7&sz=w400",
      color: "green-600",
      badge: "Workshop"
    },
    {
      id: 3,
      title: "Avaliação Nutricional",
      description: "Avaliações completas e personalizadas do estado nutricional",
      image: "https://drive.google.com/thumbnail?id=14BstHur_yH1VKShlTEL-tiQ9L-kjTPsV&sz=w400",
      color: "blue-600",
      badge: "Avaliação"
    },
    {
      id: 4,
      title: "Programas Personalizados",
      description: "Programas de nutrição adaptados às suas necessidades específicas",
      image: "https://drive.google.com/thumbnail?id=1c3TfzSx-EnmeCVQCUnfToBGE9et-HqGB&sz=w400",
      color: "purple-600",
      badge: "Programa"
    }
  ];

  // Funções do carrossel
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activities.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activities.length) % activities.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play do carrossel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % activities.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, activities.length]);

  useEffect(() => {
    // Tentar diferentes formatos de URL do Google Drive
    const imageUrls = [
      'https://drive.google.com/thumbnail?id=1wc_gc3Wfdy4BcZjuJjrmy8WuG55jx7Kf&sz=w1920',
      'https://drive.google.com/uc?export=view&id=1wc_gc3Wfdy4BcZjuJjrmy8WuG55jx7Kf',
      'https://drive.google.com/thumbnail?id=1wc_gc3Wfdy4BcZjuJjrmy8WuG55jx7Kf',
      'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=1920&h=1080&fit=crop'
    ];

    const tryLoadImage = (url, index = 0) => {
      const img = new Image();
      img.onload = () => {
        setBackgroundImage(url);
        setImageError(false);
      };
      img.onerror = () => {
        if (index < imageUrls.length - 1) {
          tryLoadImage(imageUrls[index + 1], index + 1);
        } else {
          setImageError(true);
          setBackgroundImage('https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=1920&h=1080&fit=crop');
        }
      };
      img.src = url;
    };

    tryLoadImage(imageUrls[0]);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white sm:bg-gradient-to-br sm:from-gray-50 sm:via-white sm:to-green-50 pt-16 pb-20 relative overflow-hidden min-h-screen flex items-center">
        {/* Background Image - Only on Mobile */}
        {backgroundImage && (
          <div 
            className="absolute inset-0 bg-cover bg-no-repeat hero-bg-responsive sm:hidden"
            style={{
              backgroundImage: `url('${backgroundImage}')`,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
          ></div>
        )}
        {/* Overlay for better text readability - Only on Mobile */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 to-green-800/30 sm:hidden"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent sm:hidden"></div>
        
        {/* Desktop Layout */}
        <div className="hidden sm:block w-full">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                    </svg>
                    Nutrição Personalizada
                  </div>
                  <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                    Sua <span className="text-primary">Saúde</span><br />
                    em <span className="text-secondary">Boas Mãos</span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                    Transformamos vidas através da nutrição personalizada. 
                    Nossa equipe de especialistas está pronta para guiá-lo 
                    em sua jornada para uma vida mais saudável.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 py-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">500+</div>
                    <div className="text-sm text-gray-600">Clientes Atendidos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">5+</div>
                    <div className="text-sm text-gray-600">Anos de Experiência</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">98%</div>
                    <div className="text-sm text-gray-600">Satisfação</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contactos" className="group relative bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                      </svg>
                      Agendar Consulta Agora
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                  <Link to="/portfolio" className="group bg-white text-primary border-2 border-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    <span className="flex items-center justify-center gap-3">
                      <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
                      </svg>
                      Ver Nossos Serviços
                    </span>
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex -space-x-2">
                    <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://drive.google.com/thumbnail?id=1LPB--iT6doEq_8WQIfimszfVsEQwnd0I&sz=w80" alt="Cliente 1" />
                    <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://drive.google.com/thumbnail?id=1Nb8MrDIIzxhj53ayCMUvkxW2jinHxA85&sz=w80" alt="Cliente 2" />
                    <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://drive.google.com/thumbnail?id=1Hn-JPidd3K_y9CsPbPDnw2jTRtBT2XJo&sz=w80" alt="Cliente 3" />
                    <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://drive.google.com/thumbnail?id=1OF5JL74kc3kXZFUBkufbel2qtUiTxXnm&sz=w80" alt="Cliente 4" />
                    <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://drive.google.com/thumbnail?id=114ZiDbARldT3QMLW8idh8eiuEuZmLUWG&sz=w80" alt="Cliente 5" />
                  </div>
                  <div className="text-sm text-gray-600">
                    <div className="font-semibold">500+ clientes satisfeitos</div>
                    <div className="flex items-center gap-1">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-1">4.9/5</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Visual Elements */}
              <div className="relative">
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 shadow-2xl">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                          <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Consultas Presenciais</h3>
                        <p className="text-sm text-gray-600">Atendimento personalizado em nosso consultório</p>
                      </div>
                      <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                          <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Consultas Online</h3>
                        <p className="text-sm text-gray-600">Acompanhamento à distância</p>
                      </div>
                      <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                          <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L3 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Planos Personalizados</h3>
                        <p className="text-sm text-gray-600">Dietas adaptadas às suas necessidades</p>
                      </div>
                      <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                          <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Acompanhamento</h3>
                        <p className="text-sm text-gray-600">Suporte contínuo na sua jornada</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="sm:hidden container mx-auto px-2 sm:px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white drop-shadow-2xl">
                Nutriz Consultórios: <span className="text-white bg-primary/30 px-3 py-2 rounded-lg shadow-lg">Porque nutrição e vida</span>
              </h1>
              <p className="hero-subtitle text-lg sm:text-xl text-white mb-6 sm:mb-8 font-semibold drop-shadow-xl">
                A Sua Saúde em Boas Mãos
              </p>
              <p className="text-mobile text-sm sm:text-base md:text-lg text-white mb-6 sm:mb-8 leading-relaxed drop-shadow-lg">
                Na Nutriz Consultórios, entendemos que cada pessoa é única e, por isso, oferecemos 
                soluções nutricionais personalizadas que atendem às suas necessidades específicas. 
                Acreditamos que a nutrição é a base para uma vida saudável e equilibrada.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <Link to="/sobre-nos" className="bg-transparent text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold text-sm sm:text-lg hover:bg-white hover:text-primary transition-colors shadow-2xl border-2 border-white">
                Saiba Mais
              </Link>
                <Link to="/contactos" className="group relative bg-primary/90 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold text-sm sm:text-lg hover:bg-primary transition-all duration-300 shadow-2xl border-2 border-primary transform hover:scale-105 hover:shadow-3xl overflow-hidden btn-float">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                    </svg>
                    Agendar Consulta
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Conheça a <span className="text-gradient">Nutriz Consultórios</span>
            </h2>
            <p className="section-subtitle text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Assista ao nosso vídeo institucional e descubra como podemos ajudá-lo a alcançar 
              seus objetivos de saúde e bem-estar através da nutrição personalizada.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto animate-slide-up">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/BJBf_BRKHBc?rel=0&modestbranding=1&showinfo=0&controls=1&enablejsapi=1&autoplay=0&mute=0"
                title="Nutriz Consultórios - Vídeo Institucional"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full rounded-2xl"
                loading="lazy"
              ></iframe>
            </div>
            
            <div className="text-center mt-8">
              <Link 
                to="/contactos" 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-primary to-secondary rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                  Agende Sua Consulta
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 cta-shimmer"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Buttons Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Explore Nossos <span className="text-primary">Serviços</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubra tudo o que oferecemos para sua saúde e bem-estar
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Portfolio Button */}
            <Link 
              to="/portfolio" 
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden btn-bounce-in"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
                  Portfólio
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Conheça todos os nossos serviços e preços
                </p>
                <div className="flex items-center justify-center text-primary font-semibold group-hover:translate-x-1 transition-transform duration-300">
                  Ver Serviços
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>

            {/* Depoimentos Button */}
            <Link 
              to="/galeria" 
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden btn-bounce-in"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L3 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                  Depoimentos
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Veja o que nossos clientes dizem sobre nós
                </p>
                <div className="flex items-center justify-center text-green-600 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                  Ver Depoimentos
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>

            {/* Equipamentos Médicos Button */}
            <Link 
              to="/loja" 
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden sm:col-span-2 lg:col-span-1 btn-bounce-in"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                  Equipamentos Médicos
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Encontre os melhores equipamentos para sua saúde
                </p>
                <div className="flex items-center justify-center text-purple-600 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                  Ver Equipamentos
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Nossas <span className="text-primary">Atividades</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Conheça um pouco do nosso trabalho e das atividades que realizamos para promover 
              a saúde e bem-estar da nossa comunidade
            </p>
          </div>
          
          {/* Desktop Grid - Hidden on Mobile */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {activities.map((activity, index) => (
              <div key={activity.id} className="activity-card group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={activity.image}
                    alt={activity.title}
                    className="activity-image w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className={`absolute top-4 right-4 bg-${activity.color === 'primary' ? 'primary' : activity.color} text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    {activity.badge}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`text-lg font-bold text-gray-800 mb-2 group-hover:text-${activity.color} transition-colors duration-300`}>
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {activity.description}
                  </p>
                  <div className={`flex items-center text-${activity.color} text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300`}>
                    Ver Detalhes
                    <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel - Visible only on Mobile */}
          <div className="sm:hidden carousel-container max-w-sm mx-auto">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {activities.map((activity, index) => (
                <div key={activity.id} className="carousel-slide">
                  <div className="activity-card group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 mx-2">
                    <div className="relative overflow-hidden">
                      <img 
                        src={activity.image}
                        alt={activity.title}
                        className="activity-image w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className={`absolute top-4 right-4 bg-${activity.color === 'primary' ? 'primary' : activity.color} text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                        {activity.badge}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className={`text-lg font-bold text-gray-800 mb-2 group-hover:text-${activity.color} transition-colors duration-300`}>
                        {activity.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {activity.description}
                      </p>
                      <div className={`flex items-center text-${activity.color} text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300`}>
                        Ver Detalhes
                        <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="carousel-nav prev"
              aria-label="Slide anterior"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            
            <button 
              onClick={nextSlide}
              className="carousel-nav next"
              aria-label="Próximo slide"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              </button>

            {/* Dots Indicator */}
            <div className="carousel-dots">
              {activities.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/galeria" 
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-primary to-secondary rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
                Ver Todas as Atividades
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Compromisso Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Nosso <span className="text-primary">Compromisso</span></h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Na Nutriz Consultórios, queremos ser mais do que apenas os seus nutricionistas – 
              queremos ser seus parceiros em sua jornada para uma vida mais saudável. Com a nossa 
              abordagem cuidadosa e empática, ajudamos você a superar desafios, a manter a motivação 
              e a celebrar cada conquista ao longo do caminho.
            </p>
          </div>
        </div>
      </section>

      {/* Por que escolher */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-2 sm:px-4">
          <h2 className="section-title text-center mb-16">
            Por que escolher <span className="text-gradient">A Nutriz Consultórios?</span>
          </h2>
          <div className="grid-mobile grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="card p-8 text-center group">
              <div className="bg-primary/10 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <FaUserMd className="text-3xl text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Profissionais Qualificados</h3>
              <p className="text-gray-600 leading-relaxed">
                Nossa equipa é composta por nutricionistas experientes que acompanham você em 
                todas as etapas da sua jornada de saúde.
              </p>
            </div>

            <div className="card p-8 text-center group">
              <div className="bg-primary/10 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <FaHeart className="text-3xl text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Atendimento Personalizado</h3>
              <p className="text-gray-600 leading-relaxed">
                Cada pessoa tem necessidades e objetivos diferentes, e trabalhamos com você para 
                criar um plano que seja adequado ao seu estilo de vida.
              </p>
            </div>

            <div className="card p-8 text-center group">
              <div className="bg-primary/10 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <FaAppleAlt className="text-3xl text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Abordagem Holística</h3>
              <p className="text-gray-600 leading-relaxed">
                Acreditamos que a nutrição deve ser vista como um todo – saúde física, mental e 
                emocional – por isso nosso foco é equilibrar todas as áreas do seu bem-estar.
              </p>
            </div>

            <div className="card p-8 text-center group">
              <div className="bg-primary/10 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <FaLeaf className="text-3xl text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Sustentabilidade a Longo Prazo</h3>
              <p className="text-gray-600 leading-relaxed">
                Em vez de dietas temporárias, nosso objetivo é ajudá-lo a adotar hábitos alimentares 
                saudáveis e sustentáveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Porque Nutrição */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=600&fit=crop" 
                alt="Healthy nutrition and food" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="section-title">Porque nutrição?</h2>
              <h3 className="text-2xl font-semibold text-gray-700 mb-6">
                Investir em uma alimentação saudável é investir na qualidade de vida.
              </h3>
              <p className="text-lg text-gray-600">
                A <strong>nutrição</strong> desempenha um papel fundamental na manutenção da saúde 
                e no bem-estar geral. Uma alimentação equilibrada fornece os nutrientes essenciais 
                que o corpo necessita para funcionar adequadamente, prevenindo doenças e promovendo 
                o crescimento e desenvolvimento saudável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-2 sm:px-4">
          <h2 className="section-title text-center mb-4">Passo a passo do nosso processo</h2>
          
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Avaliação e Definição de Objetivos</h3>
              <p className="text-gray-600">
                A primeira etapa do nosso processo é a consulta inicial, onde realizamos uma 
                avaliação detalhada do seu estado de saúde, hábitos alimentares, rotina e objetivos.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Elaboração de Plano Nutricional Personalizado</h3>
              <p className="text-gray-600">
                Com base na consulta inicial, criamos um plano nutricional personalizado, que pode 
                incluir: Dietas adaptadas às suas preferências alimentares.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Acompanhamento Contínuo: Suporte e Ajustes</h3>
              <p className="text-gray-600">
                Após o início do seu plano, oferecemos acompanhamento contínuo para monitorizar o 
                seu progresso. Este acompanhamento pode ser feito por meio de consultas regulares.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Revisão de Resultados: Feedback e Progresso</h3>
              <p className="text-gray-600">
                A cada X semanas (dependendo do seu plano), faremos uma revisão do seu progresso. 
                Nessa etapa, você terá a oportunidade de compartilhar os seus resultados e impressões.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testemunhos */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-2 sm:px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Testemunhos</h2>
          <h3 className="text-2xl text-center mb-12">O Que Nossos Clientes Dizem</h3>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Na Nutriz Consultórios, a nossa maior recompensa é ver nossos clientes alcançando os 
            seus objetivos e transformando as suas vidas através da nutrição. Aqui estão alguns 
            depoimentos de pessoas que confiaram no nosso trabalho e que hoje vivem de forma mais 
            saudável e equilibrada:
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white text-gray-900 p-8 rounded-lg shadow-xl">
              <div className="flex items-center mb-4">
                <img 
                  src="https://drive.google.com/thumbnail?id=1LPB--iT6doEq_8WQIfimszfVsEQwnd0I&sz=w100" 
                  alt="Cliente Maria Santos"
                  className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-primary/20"
                />
                <div>
                  <p className="font-bold text-lg">Maria Santos</p>
                  <p className="text-gray-600 text-sm">Maputo, Moçambique</p>
                </div>
              </div>
              <p className="text-lg mb-4 italic">
                "A Nutriz Consultórios mudou a minha vida! Com a ajuda dos nutricionistas, consegui 
                perder peso de forma saudável e aprender a fazer escolhas alimentares mais equilibradas. 
                Sou muito mais feliz e cheia de energia!"
              </p>
            </div>

            <div className="bg-white text-gray-900 p-8 rounded-lg shadow-xl">
              <div className="flex items-center mb-4">
                <img 
                  src="https://drive.google.com/thumbnail?id=1Nb8MrDIIzxhj53ayCMUvkxW2jinHxA85&sz=w100" 
                  alt="Cliente Carolyn Hardy"
                  className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-primary/20"
                />
                <div>
                  <p className="font-bold text-lg">Carolyn Hardy</p>
                  <p className="text-gray-600 text-sm">Matola, Moçambique</p>
                </div>
              </div>
              <p className="text-lg mb-4 italic">
                "A Nutriz Consultórios mudou a minha vida! Com a ajuda dos nutricionistas, consegui 
                perder peso de forma saudável e aprender a fazer escolhas alimentares mais equilibradas. 
                Sou muito mais feliz e cheia de energia"
              </p>
            </div>
          </div>

          {/* Additional Testimonials */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-xl">
              <div className="flex items-center mb-4">
                <img 
                  src="https://drive.google.com/thumbnail?id=1Hn-JPidd3K_y9CsPbPDnw2jTRtBT2XJo&sz=w100" 
                  alt="Cliente Jaime Manuel"
                  className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-primary/20"
                />
                <div>
                  <p className="font-bold">Jaime  Manuel</p>
                  <p className="text-gray-600 text-xs">Beira</p>
                </div>
              </div>
              <p className="text-sm italic">
                "Excelente atendimento! Os nutricionistas são muito profissionais e me ajudaram a melhorar minha alimentação."
              </p>
            </div>

            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-xl">
              <div className="flex items-center mb-4">
                <img 
                  src="https://drive.google.com/thumbnail?id=1OF5JL74kc3kXZFUBkufbel2qtUiTxXnm&sz=w100" 
                  alt="Cliente João Silva"
                  className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-primary/20"
                />
                <div>
                  <p className="font-bold">João Silva</p>
                  <p className="text-gray-600 text-xs">Nampula</p>
                </div>
              </div>
              <p className="text-sm italic">
                "Recomendo a Nutriz Consultórios! O acompanhamento nutricional foi fundamental para minha saúde."
              </p>
            </div>

            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-xl">
              <div className="flex items-center mb-4">
                <img 
                  src="https://drive.google.com/thumbnail?id=114ZiDbARldT3QMLW8idh8eiuEuZmLUWG&sz=w100" 
                  alt="Cliente Sousa Soquito"
                  className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-primary/20"
                />
                <div>
                  <p className="font-bold">Sousa Soquito</p>
                  <p className="text-gray-600 text-xs">Quelimane</p>
                </div>
              </div>
              <p className="text-sm italic">
                "Atendimento de qualidade! Aprendi muito sobre alimentação saudável e me sinto muito melhor."
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white text-gray-900 p-6 rounded-lg inline-block">
              <FaPhone className="inline text-primary text-3xl mr-3" />
              <span className="text-2xl font-bold">+258 86 4260 236</span>
              <p className="text-gray-600">Suporte 24/7</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

