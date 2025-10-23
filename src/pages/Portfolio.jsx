import { useState } from 'react';
import { FaCheckCircle, FaClock, FaUsers, FaHeart, FaLeaf, FaAppleAlt, FaWeight, FaBaby, FaDumbbell, FaUtensils, FaChartLine, FaFilePdf, FaDownload, FaEye, FaTimes, FaCalendarAlt, FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const categories = [
    { id: 'todos', name: 'Todos os Serviços' },
    { id: 'presencial', name: 'Serviços Presenciais' },
    { id: 'online', name: 'Serviços Online' },
    { id: 'gerais', name: 'Serviços Gerais' }
  ];

  const services = [
    // SERVIÇOS PRESENCIAIS
    {
      id: 1,
      title: "Consulta Nutricional Individual Presencial",
      category: "presencial",
      duration: "60-90 min",
      price: "2.500 MZN",
      description: "Avaliação completa do estado nutricional, histórico alimentar e elaboração de plano nutricional personalizado no consultório.",
      features: [
        "Avaliação antropométrica completa",
        "Análise do histórico alimentar",
        "Plano nutricional personalizado",
        "Acompanhamento semanal",
        "Suporte via WhatsApp",
        "Consulta física no consultório"
      ],
      icon: FaHeart,
      color: "bg-red-50 text-red-600",
      popular: true
    },
    {
      id: 2,
      title: "Avaliação de Composição Corporal",
      category: "presencial",
      duration: "45 min",
      price: "1.800 MZN",
      description: "Avaliação detalhada da composição corporal com equipamentos especializados.",
      features: [
        "Bioimpedância elétrica",
        "Análise de massa muscular",
        "Percentual de gordura",
        "Relatório detalhado",
        "Orientações personalizadas"
      ],
      icon: FaChartLine,
      color: "bg-blue-50 text-blue-600"
    },
    {
      id: 3,
      title: "Workshop de Culinária Saudável Presencial",
      category: "presencial",
      duration: "3 horas",
      price: "800 MZN",
      description: "Aula prática de culinária com foco em preparações saudáveis e nutritivas no nosso espaço.",
      features: [
        "Aula prática de culinária",
        "Receitas saudáveis",
        "Técnicas de preparo",
        "Material didático",
        "Degustação dos pratos",
        "Espaço equipado"
      ],
      icon: FaUtensils,
      color: "bg-orange-50 text-orange-600"
    },
    {
      id: 4,
      title: "Programa de Emagrecimento Presencial",
      category: "presencial",
      duration: "3-6 meses",
      price: "1.500 MZN/mês",
      description: "Programa completo para perda de peso saudável com consultas presenciais regulares.",
      features: [
        "Avaliação inicial completa",
        "Plano alimentar personalizado",
        "Consultas presenciais semanais",
        "Grupo de apoio no WhatsApp",
        "Material educativo digital",
        "Reavaliação mensal"
      ],
      icon: FaWeight,
      color: "bg-green-50 text-green-600",
      popular: true
    },

    // SERVIÇOS ONLINE
    {
      id: 5,
      title: "Consulta Nutricional Online",
      category: "online",
      duration: "45-60 min",
      price: "1.200 MZN",
      description: "Consulta nutricional realizada via videochamada para maior comodidade e flexibilidade.",
      features: [
        "Consulta via videochamada",
        "Plano nutricional digital",
        "Acompanhamento online",
        "Suporte via WhatsApp",
        "Material digital inclusivo",
        "Flexibilidade de horário"
      ],
      icon: FaChartLine,
      color: "bg-purple-50 text-purple-600"
    },
    {
      id: 6,
      title: "Programa de Emagrecimento Online",
      category: "online",
      duration: "3-6 meses",
      price: "1.000 MZN/mês",
      description: "Programa completo de emagrecimento com acompanhamento totalmente online.",
      features: [
        "Consultas online semanais",
        "Plano alimentar digital",
        "Grupo de apoio virtual",
        "App de acompanhamento",
        "Material educativo digital",
        "Suporte 24/7"
      ],
      icon: FaWeight,
      color: "bg-green-50 text-green-600"
    },
    {
      id: 7,
      title: "Workshop Online de Nutrição",
      category: "online",
      duration: "2 horas",
      price: "500 MZN",
      description: "Workshop educativo sobre nutrição e alimentação saudável via plataforma online.",
      features: [
        "Workshop via videochamada",
        "Material digital",
        "Interação em tempo real",
        "Gravação disponível",
        "Certificado de participação"
      ],
      icon: FaUtensils,
      color: "bg-orange-50 text-orange-600"
    },
    {
      id: 8,
      title: "Consultoria Nutricional Online",
      category: "online",
      duration: "30 min",
      price: "800 MZN",
      description: "Consultoria rápida e objetiva para esclarecimento de dúvidas nutricionais.",
      features: [
        "Consulta rápida online",
        "Esclarecimento de dúvidas",
        "Orientações práticas",
        "Suporte via WhatsApp",
        "Flexibilidade total"
      ],
      icon: FaHeart,
      color: "bg-red-50 text-red-600"
    },

    // SERVIÇOS GERAIS
    {
      id: 9,
      title: "Nutrição Materno-Infantil",
      category: "gerais",
      duration: "45-60 min",
      price: "2.000 MZN",
      description: "Acompanhamento nutricional especializado para gestantes, lactantes e crianças.",
      features: [
        "Avaliação nutricional específica",
        "Plano alimentar para gestação",
        "Orientações para amamentação",
        "Introdução alimentar para bebês",
        "Suporte para mães"
      ],
      icon: FaBaby,
      color: "bg-pink-50 text-pink-600"
    },
    {
      id: 10,
      title: "Nutrição Esportiva",
      category: "gerais",
      duration: "2-4 meses",
      price: "1.800 MZN/mês",
      description: "Otimização nutricional para atletas e praticantes de exercício físico.",
      features: [
        "Avaliação de composição corporal",
        "Plano nutricional para treinos",
        "Suplementação orientada",
        "Hidratação personalizada",
        "Acompanhamento de performance"
      ],
      icon: FaDumbbell,
      color: "bg-blue-50 text-blue-600"
    },
    {
      id: 11,
      title: "Programa de Reeducação Alimentar",
      category: "gerais",
      duration: "6 meses",
      price: "1.200 MZN/mês",
      description: "Programa focado em mudança de hábitos alimentares para vida toda.",
      features: [
        "Avaliação comportamental",
        "Plano alimentar flexível",
        "Educação nutricional",
        "Acompanhamento psicológico",
        "Grupo de apoio"
      ],
      icon: FaLeaf,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      id: 12,
      title: "Workshop de Alimentação Infantil",
      category: "gerais",
      duration: "2 horas",
      price: "600 MZN",
      description: "Orientação para pais sobre alimentação saudável para crianças.",
      features: [
        "Alimentação por faixa etária",
        "Como lidar com seletividade",
        "Receitas para crianças",
        "Material educativo",
        "Suporte pós-workshop"
      ],
      icon: FaAppleAlt,
      color: "bg-yellow-50 text-yellow-600"
    },
    {
      id: 13,
      title: "Nutrição Clínica",
      category: "gerais",
      duration: "60-90 min",
      price: "2.200 MZN",
      description: "Acompanhamento nutricional para condições clínicas específicas.",
      features: [
        "Avaliação clínica completa",
        "Plano alimentar terapêutico",
        "Acompanhamento médico",
        "Monitoramento de parâmetros",
        "Suporte especializado"
      ],
      icon: FaHeart,
      color: "bg-red-50 text-red-600"
    },
    {
      id: 14,
      title: "Consultoria Empresarial",
      category: "gerais",
      duration: "4-8 horas",
      price: "3.000 MZN",
      description: "Consultoria nutricional para empresas e instituições.",
      features: [
        "Avaliação do ambiente alimentar",
        "Programas de bem-estar",
        "Treinamento de funcionários",
        "Desenvolvimento de cardápios",
        "Acompanhamento contínuo"
      ],
      icon: FaUsers,
      color: "bg-indigo-50 text-indigo-600"
    }
  ];

  const filteredServices = services.filter(service =>
    activeCategory === 'todos' || service.category === activeCategory
  );

  const handleBookingClick = (service) => {
    setSelectedService(service);
    setFormData(prev => ({
      ...prev,
      service: service.title
    }));
    setShowBookingModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Dados do agendamento:', formData);
    alert('Solicitação de agendamento enviada com sucesso! Entraremos em contacto em breve.');
    setShowBookingModal(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      preferredDate: '',
      preferredTime: '',
      message: ''
    });
  };

  const closeModal = () => {
    setShowBookingModal(false);
    setSelectedService(null);
  };

  return (
    <div className="pt-16 sm:pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Nosso <span className="text-gradient">Portfólio de Serviços</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-4 sm:mb-6">
            Descubra nossa gama completa de serviços nutricionais
          </p>
          
          {/* Portfolio Types - Mobile Compact */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-md">
              <h3 className="font-bold text-xs sm:text-sm mb-1">Presenciais</h3>
              <p className="text-xs text-gray-600">No consultório</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-md">
              <h3 className="font-bold text-xs sm:text-sm mb-1">Online</h3>
              <p className="text-xs text-gray-600">Videochamada</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-md">
              <h3 className="font-bold text-xs sm:text-sm mb-1">Gerais</h3>
              <p className="text-xs text-gray-600">Especializados</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-md">
              <h3 className="font-bold text-xs sm:text-sm mb-1">Workshops</h3>
              <p className="text-xs text-gray-600">Práticos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-4 sm:py-6 bg-white">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {filteredServices.map(service => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className={`bg-white rounded-lg shadow-md p-4 sm:p-6 relative group hover:shadow-lg transition-all duration-300 ${
                    service.popular ? 'ring-1 ring-primary' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-2 left-2">
                      <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-bold">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-4">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`${service.color} w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="text-lg sm:text-xl" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm sm:text-base font-bold mb-1 line-clamp-2">{service.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{service.description}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div className="text-xs text-gray-500">
                        <span className="block">Duração:</span>
                        <span className="font-semibold text-gray-700">{service.duration}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-gray-500 block">Preço:</span>
                        <span className="font-bold text-primary text-sm sm:text-base">{service.price}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-xs sm:text-sm mb-2">Incluído:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs">
                          <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0 text-xs" />
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    onClick={() => handleBookingClick(service)}
                    className="w-full bg-primary text-white py-2 px-4 rounded-lg font-semibold text-xs sm:text-sm hover:bg-secondary transition-colors"
                  >
                    Agendar
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-6 sm:py-8 bg-gray-50">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
            <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
              <FaUsers className="text-lg sm:text-xl text-primary mx-auto mb-2" />
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-1">500+</h3>
              <p className="text-xs sm:text-sm text-gray-600">Clientes</p>
            </div>
            <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
              <FaHeart className="text-lg sm:text-xl text-primary mx-auto mb-2" />
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-1">98%</h3>
              <p className="text-xs sm:text-sm text-gray-600">Satisfação</p>
            </div>
            <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
              <FaClock className="text-lg sm:text-xl text-primary mx-auto mb-2" />
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-1">5+</h3>
              <p className="text-xs sm:text-sm text-gray-600">Anos</p>
            </div>
            <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
              <FaChartLine className="text-lg sm:text-xl text-primary mx-auto mb-2" />
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-1">1000+</h3>
              <p className="text-xs sm:text-sm text-gray-600">Transformações</p>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Portfolio Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">Portfólios em PDF</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Baixe nossos portfólios completos em PDF para visualização offline ou compartilhamento
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* PDF 1 */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-red-50 p-3 rounded-lg flex-shrink-0">
                  <FaFilePdf className="text-2xl text-red-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1 line-clamp-2">
                    Portfólio de Serviços e Preços
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2">
                    Catálogo completo de serviços e preços
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <FaClock className="text-xs" />
                    <span>Última atualização: Jan 2025</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <a 
                  href="/src/Portifolios/Portifolio de Servicos e Precos (1).pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-primary text-white px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold hover:bg-secondary transition-colors flex items-center justify-center gap-2"
                >
                  <FaEye className="text-xs" />
                  Visualizar
                </a>
                <a 
                  href="/src/Portifolios/Portifolio de Servicos e Precos (1).pdf" 
                  download="Portfolio-Servicos-Precos.pdf"
                  className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                  <FaDownload className="text-xs" />
                  Baixar
                </a>
              </div>
            </div>

            {/* PDF 2 */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-red-50 p-3 rounded-lg flex-shrink-0">
                  <FaFilePdf className="text-2xl text-red-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1 line-clamp-2">
                    Portfólio de Serviços Online
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2">
                    Serviços de consultoria e atendimento online
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <FaClock className="text-xs" />
                    <span>Última atualização: Jan 2025</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <a 
                  href="/src/Portifolios/PORTIFOLIO DE SERVICOS ONLINE.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-primary text-white px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold hover:bg-secondary transition-colors flex items-center justify-center gap-2"
                >
                  <FaEye className="text-xs" />
                  Visualizar
                </a>
                <a 
                  href="/src/Portifolios/PORTIFOLIO DE SERVICOS ONLINE.pdf" 
                  download="Portfolio-Servicos-Online.pdf"
                  className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                  <FaDownload className="text-xs" />
                  Baixar
                </a>
              </div>
            </div>

            {/* Placeholder for future PDFs */}
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center text-center group hover:border-primary transition-colors duration-300">
              <div className="bg-gray-100 p-3 rounded-lg mb-3">
                <FaFilePdf className="text-2xl text-gray-400" />
              </div>
              <h3 className="text-sm font-semibold text-gray-600 mb-1">
                Mais Portfólios
              </h3>
              <p className="text-xs text-gray-500">
                Novos documentos em breve
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Pronto para começar?</h2>
          <p className="text-sm sm:text-base mb-4 sm:mb-6 max-w-xl mx-auto">
            Escolha o serviço que melhor se adequa às suas necessidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="/contactos" className="bg-white text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-100 transition-colors">
              Agendar Consulta
            </a>
            <a href="tel:+258864260236" className="border-2 border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-white hover:text-primary transition-colors">
              Ligar Agora
            </a>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <FaCalendarAlt className="text-primary" />
                  Agendar Consulta
                </h3>
                <button 
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              {/* Service Info */}
              {selectedService && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-green-800 mb-1">{selectedService.title}</h4>
                  <p className="text-sm text-green-700 mb-2">{selectedService.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-green-600">Duração: {selectedService.duration}</span>
                    <span className="font-bold text-green-800">{selectedService.price}</span>
                  </div>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <FaUser className="inline mr-2 text-primary" />
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <FaEnvelope className="inline mr-2 text-primary" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <FaPhone className="inline mr-2 text-primary" />
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+258 XX XXX XXXX"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Data Preferida *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Horário Preferido *
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Selecione</option>
                      <option value="08:00">08:00</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensagem Adicional
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Alguma informação adicional ou preferência especial..."
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition-colors"
                  >
                    Enviar Solicitação
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
