import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contactos = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar se os campos obrigatórios estão preenchidos
    if (!formData.nome || !formData.email || !formData.assunto || !formData.mensagem) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Criar mensagem para WhatsApp
    const whatsappMessage = `📞 *NOVA MENSAGEM - NUTRIZ CONSULTÓRIOS*

👤 *Dados do Cliente:*
• Nome: ${formData.nome}
• Email: ${formData.email}
• Telefone: ${formData.telefone || 'Não informado'}

📋 *Detalhes da Mensagem:*
• Assunto: ${formData.assunto}
• Mensagem: ${formData.mensagem}

---
*Esta mensagem será redirecionada para um de nossos atendentes que entrará em contacto consigo em breve.*

*Obrigado por contactar a Nutriz Consultórios!*`;

    // Número do WhatsApp
    const whatsappNumber = "258864260236";
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Limpar formulário
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: ''
    });
  };
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Entre em <span className="text-primary">Contacto</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Estamos prontos para ajudá-lo a iniciar sua jornada rumo a uma vida mais saudável. 
            Entre em contacto connosco hoje mesmo!
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Informações de Contacto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-green-50 p-6 rounded-lg">
                  <FaMapMarkerAlt className="text-3xl text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Localização</h3>
                    <p className="text-gray-600">Maputo-Matola, Matola</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-green-50 p-6 rounded-lg">
                  <FaPhone className="text-3xl text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Telefone</h3>
                    <a href="tel:+258864260236" className="text-primary font-semibold hover:underline">
                      +258 86 426 0 236
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Suporte 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-green-50 p-6 rounded-lg">
                  <FaEnvelope className="text-3xl text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Email</h3>
                    <a href="mailto:suporte@nutrizconsultorios.org" className="text-primary font-semibold hover:underline">
                      suporte@nutrizconsultorios.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-green-50 p-6 rounded-lg">
                  <FaClock className="text-3xl text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Horário de Atendimento</h3>
                    <p className="text-gray-600">Segunda a Sexta: 08:00 - 17:30</p>
                    <p className="text-gray-600">Sábado: 09:00 - 13:00</p>
                    <p className="text-gray-600">Domingo: Fechado</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Siga-nos nas Redes Sociais</h3>
                <div className="flex gap-4">
                  <a href="#" className="bg-primary text-white p-4 rounded-full hover:bg-secondary transition-colors">
                    <FaFacebookF className="text-xl" />
                  </a>
                  <a href="#" className="bg-primary text-white p-4 rounded-full hover:bg-secondary transition-colors">
                    <FaTwitter className="text-xl" />
                  </a>
                  <a href="#" className="bg-primary text-white p-4 rounded-full hover:bg-secondary transition-colors">
                    <FaInstagram className="text-xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white shadow-xl rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Envie-nos uma Mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Nome Completo *</label>
                  <input 
                    type="text" 
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    placeholder="Seu nome" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    placeholder="+258 XX XXX XXXX" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Assunto *</label>
                  <select 
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="Agendar Consulta">Agendar Consulta</option>
                    <option value="Solicitar Informação">Solicitar Informação</option>
                    <option value="Pedir Orçamento">Pedir Orçamento</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Mensagem *</label>
                  <textarea 
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    placeholder="Escreva sua mensagem aqui..." 
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Enviar via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Nossa Localização</h2>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.1234567890123!2d32.5678901234567!3d-25.9876543210987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e69c8b8b8b8b8b8%3A0x1234567890abcdef!2sMatola%2C%20Mozambique!5e0!3m2!1sen!2smz!4v1234567890123!5m2!1sen!2smz"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Nutriz Consultórios - Maputo-Matola"
              className="w-full h-96 md:h-[500px]"
            ></iframe>
          </div>
          
          {/* Informações adicionais do mapa */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-2">Endereço</h3>
              <p className="text-gray-600">Maputo-Matola, Matola<br />Mozambique</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-2">Horário</h3>
              <p className="text-gray-600">Seg-Sex: 08:00-17:30<br />Sáb: 09:00-13:00</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-2">Estacionamento</h3>
              <p className="text-gray-600">Gratuito disponível<br />no local</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para começar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Dê o primeiro passo rumo a uma vida mais saudável. Entre em contacto connosco hoje mesmo!
          </p>
          <a href="tel:+258864260236" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block">
            Ligar Agora
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contactos;


