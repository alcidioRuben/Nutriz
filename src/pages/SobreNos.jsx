import { FaHeart, FaUsers, FaAward, FaLeaf } from 'react-icons/fa';

const SobreNos = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Sobre <span className="text-primary">Nós</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Conheça a nossa história, missão e valores que nos tornam referência em nutrição e bem-estar.
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Nossa História</h2>
              <p className="text-lg text-gray-600 mb-4">
                A Nutriz Consultórios nasceu da paixão por transformar vidas através da nutrição. 
                Fundada por profissionais experientes e dedicados, nossa missão sempre foi oferecer 
                um atendimento humanizado e personalizado.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Ao longo dos anos, temos ajudado centenas de pessoas a alcançarem seus objetivos de 
                saúde, sempre com foco em resultados sustentáveis e bem-estar integral.
              </p>
              <p className="text-lg text-gray-600">
                Hoje, somos uma referência em Moçambique, reconhecidos pela qualidade dos nossos 
                serviços e pelo compromisso com a saúde dos nossos clientes.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=600&fit=crop" 
                alt="Equipa" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Nossos Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <FaHeart className="text-5xl text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Empatia</h3>
              <p className="text-gray-600">
                Compreendemos suas necessidades e desafios, oferecendo suporte genuíno em cada etapa.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <FaUsers className="text-5xl text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Compromisso</h3>
              <p className="text-gray-600">
                Dedicamo-nos totalmente ao seu sucesso, acompanhando você com atenção e cuidado.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <FaAward className="text-5xl text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Excelência</h3>
              <p className="text-gray-600">
                Buscamos sempre os melhores resultados, com base em evidências científicas atualizadas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <FaLeaf className="text-5xl text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Sustentabilidade</h3>
              <p className="text-gray-600">
                Promovemos mudanças duradouras que se integram naturalmente ao seu estilo de vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-primary to-secondary text-white p-12 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Nossa Missão</h2>
              <p className="text-lg">
                Transformar vidas através da nutrição, oferecendo soluções personalizadas e baseadas 
                em evidências científicas, que promovam saúde, bem-estar e qualidade de vida de forma 
                sustentável e acessível a todos.
              </p>
            </div>

            <div className="bg-gradient-to-br from-secondary to-primary text-white p-12 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Nossa Visão</h2>
              <p className="text-lg">
                Ser a referência em nutrição e bem-estar em Moçambique, reconhecidos pela excelência 
                no atendimento, inovação nas práticas nutricionais e pelo impacto positivo na saúde 
                e qualidade de vida das pessoas.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SobreNos;


