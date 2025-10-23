import { FaAppleAlt, FaWeight, FaHeartbeat, FaRunning, FaBaby, FaUserMd } from 'react-icons/fa';

const Servicos = () => {
  const servicos = [
    {
      icon: <FaWeight className="text-5xl text-primary" />,
      title: "Perda de Peso",
      description: "Programas personalizados para perda de peso saudável e sustentável, com acompanhamento nutricional completo."
    },
    {
      icon: <FaHeartbeat className="text-5xl text-primary" />,
      title: "Nutrição Clínica",
      description: "Tratamento nutricional para diabetes, hipertensão, colesterol alto e outras condições de saúde."
    },
    {
      icon: <FaRunning className="text-5xl text-primary" />,
      title: "Nutrição Desportiva",
      description: "Planos alimentares específicos para atletas e praticantes de atividade física."
    },
    {
      icon: <FaBaby className="text-5xl text-primary" />,
      title: "Nutrição Infantil",
      description: "Acompanhamento nutricional para crianças e adolescentes, promovendo hábitos saudáveis desde cedo."
    },
    {
      icon: <FaAppleAlt className="text-5xl text-primary" />,
      title: "Reeducação Alimentar",
      description: "Aprenda a fazer escolhas alimentares conscientes e desenvolva uma relação saudável com a comida."
    },
    {
      icon: <FaUserMd className="text-5xl text-primary" />,
      title: "Consultas Online",
      description: "Atendimento nutricional por videochamada, com toda a comodidade e qualidade."
    }
  ];

  return (
    <div className="pt-16 sm:pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Nossos <span className="text-primary">Serviços</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços nutricionais personalizados para atender às suas 
            necessidades específicas e ajudá-lo a alcançar seus objetivos de saúde.
          </p>
        </div>
      </section>

      {/* Serviços Grid */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {servicos.map((servico, index) => (
              <div 
                key={index}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all border-t-4 border-primary"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex-shrink-0">
                    <div className="text-2xl sm:text-3xl md:text-4xl text-primary">
                      {servico.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 line-clamp-2">{servico.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 line-clamp-3">{servico.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Pronto para começar sua jornada?</h2>
          <p className="text-sm sm:text-base mb-4 sm:mb-6 max-w-xl mx-auto">
            Entre em contacto connosco hoje mesmo e descubra como podemos ajudá-lo a alcançar 
            seus objetivos de saúde e bem-estar.
          </p>
          <a href="tel:+258864260236" className="bg-white text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-100 transition-colors inline-block">
            Ligar Agora: +258 86 426 0 236
          </a>
        </div>
      </section>
    </div>
  );
};

export default Servicos;


