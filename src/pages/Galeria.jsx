import { useState } from 'react';
import { FaImages, FaCertificate, FaDownload, FaEye, FaPlay } from 'react-icons/fa';

const Galeria = () => {
  const [activeTab, setActiveTab] = useState('atividades');

  const atividades = [
    {
      id: 1,
      title: "Atividade Nutricional 1",
      image: "https://drive.google.com/thumbnail?id=13UBXP49p2Q1dgzx4UsMo9Yr_k6X7rKz1&sz=w400",
      date: "Jan 2025",
      description: "Atividade de nutrição e bem-estar"
    },
    {
      id: 2,
      title: "Atividade Nutricional 2",
      image: "https://drive.google.com/thumbnail?id=1Ga0TPmnsy4aEDhLVIJTPXtZAiVsnfjQ7&sz=w400",
      date: "Jan 2025",
      description: "Sessão de consultoria nutricional"
    },
    {
      id: 3,
      title: "Atividade Nutricional 3",
      image: "https://drive.google.com/thumbnail?id=14BstHur_yH1VKShlTEL-tiQ9L-kjTPsV&sz=w400",
      date: "Jan 2025",
      description: "Workshop de alimentação saudável"
    },
    {
      id: 4,
      title: "Atividade Nutricional 4",
      image: "https://drive.google.com/thumbnail?id=1c3TfzSx-EnmeCVQCUnfToBGE9et-HqGB&sz=w400",
      date: "Jan 2025",
      description: "Avaliação nutricional personalizada"
    },
    {
      id: 5,
      title: "Atividade Nutricional 5",
      image: "https://drive.google.com/thumbnail?id=1lZHRO-ysA9z4mQZxlTCC79hXDCSoqEU8&sz=w400",
      date: "Jan 2025",
      description: "Programa de reeducação alimentar"
    },
    {
      id: 6,
      title: "Atividade Nutricional 6",
      image: "https://drive.google.com/thumbnail?id=1mciiu_pCEBlW0AcvnK7MvHSn3wQ_qbL6&sz=w400",
      date: "Jan 2025",
      description: "Consultoria em nutrição esportiva"
    },
    {
      id: 7,
      title: "Atividade Nutricional 7",
      image: "https://drive.google.com/thumbnail?id=1HSKurlV-uRZtTUe6XUM_nlEtwG3EZidv&sz=w400",
      date: "Jan 2025",
      description: "Workshop de culinária saudável"
    },
    {
      id: 8,
      title: "Atividade Nutricional 8",
      image: "https://drive.google.com/thumbnail?id=16hlrd4Acya6ze7bcvcaheShy1_pjeSZS&sz=w400",
      date: "Jan 2025",
      description: "Avaliação de composição corporal"
    },
    {
      id: 9,
      title: "Atividade Nutricional 9",
      image: "https://drive.google.com/thumbnail?id=1PoH0YUlv0AuLPqIky5gv1iSGwPcbWz9L&sz=w400",
      date: "Jan 2025",
      description: "Nutrição materno-infantil"
    },
    {
      id: 10,
      title: "Atividade Nutricional 10",
      image: "https://drive.google.com/thumbnail?id=1mclr4GaDDN6gSmvEQjHuBxmFNPBY233Q&sz=w400",
      date: "Jan 2025",
      description: "Consultas online de nutrição"
    },
    {
      id: 11,
      title: "Atividade Nutricional 11",
      image: "https://drive.google.com/thumbnail?id=11lJCP0rLHyGtzDZcwCXlq1Wz8U22AlXW&sz=w400",
      date: "Jan 2025",
      description: "Programa de emagrecimento saudável"
    },
    {
      id: 12,
      title: "Atividade Nutricional 12",
      image: "https://drive.google.com/thumbnail?id=1ea4guvZ0mrPyfMDtBIfhHSe88FBsvsB6&sz=w400",
      date: "Jan 2025",
      description: "Workshop de alimentação infantil"
    },
    {
      id: 13,
      title: "Atividade Nutricional 13",
      image: "https://drive.google.com/thumbnail?id=1ToldWJzc_P9URkT8tQuwH8DD33-SsugR&sz=w400",
      date: "Jan 2025",
      description: "Consultoria nutricional empresarial"
    },
    {
      id: 14,
      title: "Atividade Nutricional 14",
      image: "https://drive.google.com/thumbnail?id=1Kfs-TVrkPPZ2H51SigTtAeTLugr9T0NU&sz=w400",
      date: "Jan 2025",
      description: "Avaliação nutricional clínica"
    },
    {
      id: 15,
      title: "Atividade Nutricional 15",
      image: "https://drive.google.com/thumbnail?id=1zOSBrnt4j0GEyJ91ir71TryLFLEe2-L6&sz=w400",
      date: "Jan 2025",
      description: "Workshop de nutrição funcional"
    },
    {
      id: 16,
      title: "Atividade Nutricional 16",
      image: "https://drive.google.com/thumbnail?id=14BstHur_yH1VKShlTEL-tiQ9L-kjTPsV&sz=w400",
      date: "Jan 2025",
      description: "Consultas presenciais de nutrição"
    },
    {
      id: 17,
      title: "Atividade Nutricional 17",
      image: "https://drive.google.com/thumbnail?id=1pd0N9RD84wyAqdXbl3VgEG1ClJ1nqx_N&sz=w400",
      date: "Jan 2025",
      description: "Programa de reeducação alimentar"
    },
    {
      id: 18,
      title: "Atividade Nutricional 18",
      image: "https://drive.google.com/thumbnail?id=1x-_hp9VmdaQu5TycYLrinm1ukKUz7Sah&sz=w400",
      date: "Jan 2025",
      description: "Workshop de nutrição esportiva"
    },
    {
      id: 19,
      title: "Atividade Nutricional 19",
      image: "https://drive.google.com/thumbnail?id=1-TiXzhpZFVWvShULxt1BPwS2A7u2kXjR&sz=w400",
      date: "Jan 2025",
      description: "Consultoria em alimentação saudável"
    },
    {
      id: 20,
      title: "Atividade Nutricional 20",
      image: "https://drive.google.com/thumbnail?id=1A8p4vqqFWQUZ9_Llsy3NbZBvxIZhQdiP&sz=w400",
      date: "Jan 2025",
      description: "Avaliação nutricional completa"
    },
    {
      id: 21,
      title: "Atividade Nutricional 21",
      image: "https://drive.google.com/thumbnail?id=1ZOA1cN7a8dQEbBBIDpSyPvGMoiuwsrz7&sz=w400",
      date: "Jan 2025",
      description: "Workshop de culinária terapêutica"
    },
    {
      id: 22,
      title: "Atividade Nutricional 22",
      image: "https://drive.google.com/thumbnail?id=1fnN5V0kmFgaIHdaZP_wHzah4mtDhbW8W&sz=w400",
      date: "Jan 2025",
      description: "Programa de nutrição preventiva"
    },
    {
      id: 23,
      title: "Atividade Nutricional 23",
      image: "https://drive.google.com/thumbnail?id=1KxPRmXb0zqfATrcubBpvJ5PM-xdbNkpZ&sz=w400",
      date: "Jan 2025",
      description: "Consultas de nutrição clínica"
    },
    {
      id: 24,
      title: "Atividade Nutricional 24",
      image: "https://drive.google.com/thumbnail?id=1Wfc3p_i5ZhjAorbBuU3GAZ2JmiHlcjQo&sz=w400",
      date: "Jan 2025",
      description: "Workshop de alimentação consciente"
    },
    {
      id: 25,
      title: "Atividade Nutricional 25",
      image: "https://drive.google.com/thumbnail?id=11-p-oZiSZ4CxXRtO-RxndRIAOLLuv75k&sz=w400",
      date: "Jan 2025",
      description: "Avaliação de hábitos alimentares"
    },
    {
      id: 26,
      title: "Atividade Nutricional 26",
      image: "https://drive.google.com/thumbnail?id=1JiUpdfUv0czfHwmNboKTWEw7Ch-xTPGr&sz=w400",
      date: "Jan 2025",
      description: "Consultoria em nutrição personalizada"
    },
    {
      id: 27,
      title: "Atividade Nutricional 27",
      image: "https://drive.google.com/thumbnail?id=1OmHI1FZAqz-4BPHcNbqT4uPWMMC2G6gX&sz=w400",
      date: "Jan 2025",
      description: "Programa de bem-estar nutricional"
    },
    {
      id: 28,
      title: "Atividade Nutricional 28",
      image: "https://drive.google.com/thumbnail?id=1sE_N687lUv5yXUiz1hsFrXRKod6n5UZk&sz=w400",
      date: "Jan 2025",
      description: "Workshop de nutrição holística"
    }
  ];

  const comprovativos = [
    {
      id: 1,
      title: "Vídeo Depoimento 1",
      image: "https://drive.google.com/thumbnail?id=1bPxl8RX6aiOCo9nVCDqK7w5tbLUFECff&sz=w400",
      video: "https://drive.google.com/file/d/1bPxl8RX6aiOCo9nVCDqK7w5tbLUFECff/preview",
      date: "Jan 2025",
      description: "Depoimento em vídeo de cliente satisfeito",
      type: "video"
    },
    {
      id: 2,
      title: "Vídeo Depoimento 2",
      image: "https://drive.google.com/thumbnail?id=1Mq6Af2pvyFl5vRbX8vdWjyIkHpjpzqXV&sz=w400",
      video: "https://drive.google.com/file/d/1Mq6Af2pvyFl5vRbX8vdWjyIkHpjpzqXV/preview",
      date: "Jan 2025",
      description: "Testemunho em vídeo sobre nossos serviços",
      type: "video"
    },
    {
      id: 3,
      title: "Comprovativo 3",
      image: "https://drive.google.com/thumbnail?id=1WuR1cbhR-n9eGSrXcwqXVDJn4Qg8T9p_&sz=w400",
      date: "Jan 2025",
      description: "Relatório de avaliação nutricional"
    },
    {
      id: 4,
      title: "Comprovativo 4",
      image: "https://drive.google.com/thumbnail?id=1FVY0dzWD_q7gABTHjTZVTA-f_g_onJmX&sz=w400",
      date: "Jan 2025",
      description: "Comprovativo de consulta realizada"
    },
    {
      id: 5,
      title: "Comprovativo 5",
      image: "https://drive.google.com/thumbnail?id=1G5t6_-AS3jo6J71augvpnopmQ0Rz8MDn&sz=w400",
      date: "Jan 2025",
      description: "Certificado de formação profissional"
    },
    {
      id: 6,
      title: "Comprovativo 6",
      image: "https://drive.google.com/thumbnail?id=1zqjE_Ut5NRMOQHA9zE0qiWD8QgERViA-&sz=w400",
      date: "Jan 2025",
      description: "Comprovativo de pagamento de serviços"
    },
    {
      id: 7,
      title: "Comprovativo 7",
      image: "https://drive.google.com/thumbnail?id=1kqvDCh15kri_XJCEmMRtu3Grj63plCOL&sz=w400",
      date: "Jan 2025",
      description: "Licença de funcionamento atualizada"
    },
    {
      id: 8,
      title: "Comprovativo 8",
      image: "https://drive.google.com/thumbnail?id=1TbHJq3DSjXzWDxqhC46PXcWcNZjf2-kf&sz=w400",
      date: "Jan 2025",
      description: "Certificado de qualidade ISO"
    },
    {
      id: 9,
      title: "Comprovativo 9",
      image: "https://drive.google.com/thumbnail?id=1IzqmZP8klUQ0xHmL1F2z5jxdNdLu14Q3&sz=w400",
      date: "Jan 2025",
      description: "Relatório de entrega de produtos"
    },
    {
      id: 10,
      title: "Comprovativo 10",
      image: "https://drive.google.com/thumbnail?id=1ni-xvQ84rnN7wdUtw3TsIoe78TN-sfoI&sz=w400",
      date: "Jan 2025",
      description: "Comprovativo de consulta online"
    },
    {
      id: 11,
      title: "Comprovativo 11",
      image: "https://drive.google.com/thumbnail?id=1dHpIbQHt-3cwf4-Aa84F9SZ5hvehEm7M&sz=w400",
      date: "Jan 2025",
      description: "Certificado de avaliação nutricional"
    },
    {
      id: 12,
      title: "Comprovativo 12",
      image: "https://drive.google.com/thumbnail?id=1uehZLJsh-eH0nk9IvQiu9gGfw6AF33Zr&sz=w400",
      date: "Jan 2025",
      description: "Comprovativo de workshop realizado"
    },
    {
      id: 13,
      title: "Comprovativo 13",
      image: "https://drive.google.com/thumbnail?id=1Dw83FcFeM8AJM1bRC0wNkVOj7bj9H8pw&sz=w400",
      date: "Jan 2025",
      description: "Relatório de acompanhamento nutricional"
    },
    {
      id: 14,
      title: "Comprovativo 14",
      image: "https://drive.google.com/thumbnail?id=1KdVcB_ALiC5KnTK3f1DkGFlG5U3-_sLX&sz=w400",
      date: "Jan 2025",
      description: "Certificado de programa de emagrecimento"
    },
    {
      id: 15,
      title: "Comprovativo 15",
      image: "https://drive.google.com/thumbnail?id=1nuV2owalbcyh57FSJxbqo-BlK-mvmmWU&sz=w400",
      date: "Jan 2025",
      description: "Comprovativo de consulta presencial"
    },
    {
      id: 16,
      title: "Comprovativo 16",
      image: "https://drive.google.com/thumbnail?id=1dzFVi-cN8OYMKx_CU2vj_4Ri1IsfGqtq&sz=w400",
      date: "Jan 2025",
      description: "Certificado de formação contínua"
    },
    {
      id: 17,
      title: "Comprovativo 17",
      image: "https://drive.google.com/thumbnail?id=1itaGzaeltfkTgW_Go4v4F9ooXM3QTJj3&sz=w400",
      date: "Jan 2025",
      description: "Comprovativo de entrega de suplementos"
    }
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="pt-16 sm:pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Nossos <span className="text-primary">Depoimentos</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Veja o que nossos clientes têm a dizer sobre nossos serviços.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1 flex">
              <button
                onClick={() => setActiveTab('atividades')}
                className={`px-6 py-3 rounded-md font-semibold transition-colors flex items-center gap-2 ${
                  activeTab === 'atividades'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                <FaImages /> Atividades
              </button>
              <button
                onClick={() => setActiveTab('comprovativos')}
                className={`px-6 py-3 rounded-md font-semibold transition-colors flex items-center gap-2 ${
                  activeTab === 'comprovativos'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                <FaCertificate /> Comprovativos
              </button>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeTab === 'atividades' ? atividades : comprovativos).map((item) => (
              <div
                key={item.id}
                className="gallery-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => openModal(item)}
              >
                <div className="gallery-image-container">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="gallery-image"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    {item.type === 'video' ? (
                      <FaPlay className="text-white text-3xl opacity-0 hover:opacity-100 transition-opacity" />
                    ) : (
                      <FaEye className="text-white text-2xl opacity-0 hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                  {item.type === 'video' && (
                    <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      VÍDEO
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{item.date}</p>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-hidden">
            <div className="relative bg-gray-100 flex items-center justify-center">
              {selectedImage.type === 'video' ? (
                <iframe
                  src={selectedImage.video}
                  title={selectedImage.title}
                  className="w-full h-[60vh] border-0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="gallery-image max-h-[60vh] max-w-full"
                />
              )}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-colors"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-600 mb-2">{selectedImage.date}</p>
              <p className="text-gray-700 mb-4">{selectedImage.description}</p>
              <div className="flex gap-4">
                {selectedImage.type === 'video' ? (
                  <a
                    href={selectedImage.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2"
                  >
                    <FaEye /> Ver no Google Drive
                  </a>
                ) : (
                  <button className="btn-primary flex items-center gap-2">
                    <FaDownload /> Download
                  </button>
                )}
                <button
                  onClick={closeModal}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Interessado nos nossos serviços?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contacto connosco e descubra como podemos ajudá-lo a alcançar seus objetivos de saúde.
          </p>
          <a href="/contactos" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block">
            Contactar Agora
          </a>
        </div>
      </section>
    </div>
  );
};

export default Galeria;
