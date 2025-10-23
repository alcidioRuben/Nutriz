import { useState } from 'react';
import { FaShoppingCart, FaHeart, FaStar, FaSearch, FaFilter, FaPlus, FaMinus, FaCheck, FaTimes, FaTrash, FaChevronRight } from 'react-icons/fa';

const Loja = () => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [sortBy, setSortBy] = useState('nome');
  const [showCart, setShowCart] = useState(false);

  const categories = [
    { id: 'todos', name: 'Todos os Produtos' },
    { id: 'equipamentos', name: 'Equipamentos Médicos' }
  ];

  const products = [
    {
      id: 1,
      name: "Kit Completo (Esfigmomanómetro + Estetoscópio + Termómetro)",
      category: "equipamentos",
      price: 2799,
      image: "https://drive.google.com/thumbnail?id=1zX9YwpZ757osjPuBTls5ToA-VwU1Uupj&sz=w400",
      rating: 4.9,
      reviews: 28,
      description: "Kit completo com esfigmomanómetro, estetoscópio profissional e termómetro para medições precisas",
      inStock: true,
      discount: 0
    },
    {
      id: 2,
      name: "Glicómetro (Aparelho de Medição de Glicemia)",
      category: "equipamentos",
      price: 1899,
      image: "https://drive.google.com/thumbnail?id=1_5jprizkqC6bZeY8SDPusXyAE7L_eRyN&sz=w400",
      rating: 4.8,
      reviews: 45,
      description: "Aparelho digital para medição precisa da glicemia, essencial para diabéticos",
      inStock: true,
      discount: 0
    },
    {
      id: 3,
      name: "Esfigmomanômetro (Aparelho de Pressão)",
      category: "equipamentos",
      price: 1899,
      image: "https://drive.google.com/thumbnail?id=14RMncd6tvjF9zLzER-o32_Wv1-se7hSz&sz=w400",
      rating: 4.7,
      reviews: 32,
      description: "Aparelho digital para medição da pressão arterial com precisão clínica",
      inStock: true,
      discount: 0
    },
    {
      id: 4,
      name: "50 Fitas para Medir Glicemia",
      category: "equipamentos",
      price: 1400,
      image: "https://drive.google.com/thumbnail?id=1kj0eWP2KaCgPdgD1A8s---mYGb_Epc1J&sz=w400",
      rating: 4.6,
      reviews: 67,
      description: "Fitas descartáveis para medição de glicemia com o glicómetro",
      inStock: true,
      discount: 0
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(cart.map(item =>
      item.id === productId
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  const finalizePurchase = () => {
    if (cart.length === 0) return;
    
    // Criar mensagem para WhatsApp
    const totalPrice = getTotalPrice();
    const itemsList = cart.map(item => 
      `• ${item.name} (Qtd: ${item.quantity}) - ${formatPrice(item.price * item.quantity)}`
    ).join('\n');
    
    const message = `🛒 *PEDIDO - NUTRIZ CONSULTÓRIOS*

📋 *Itens Selecionados:*
${itemsList}

💰 *Total: ${formatPrice(totalPrice)}*

📞 *Dados para Entrega:*
Nome: 
Telefone: 
Endereço: 
Cidade: 
Observações: 

Por favor, preencha seus dados para finalizarmos o pedido!`;

    // Número do WhatsApp (substitua pelo número real)
    const whatsappNumber = "258864260236";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Fechar carrinho
    setShowCart(false);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-MZ', {
      style: 'currency',
      currency: 'MZN',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="pt-16 sm:pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Nossos <span className="text-primary">Equipamentos Médicos</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Equipamentos médicos de qualidade para complementar sua jornada nutricional. 
            Suplementos, produtos naturais, equipamentos e muito mais!
          </p>
        </div>
      </section>

      {/* Fixed Cart Header */}
      {cart.length > 0 && (
        <div className="fixed top-20 left-0 right-0 bg-white shadow-xl border-b z-40 animate-cartSlideDown">
          <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-5">
            <div className="flex items-center justify-between gap-3">
              {/* Left Side - Cart Info */}
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                <div className="relative">
                  <FaShoppingCart className="text-primary text-lg sm:text-xl" />
                  <div className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="font-semibold text-gray-800 text-sm sm:text-base">
                      Carrinho ({cart.length} {cart.length === 1 ? 'item' : 'itens'})
                    </span>
                    <span className="text-primary font-bold text-sm sm:text-lg">
                      {formatPrice(getTotalPrice())}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Action Buttons */}
              <div className="flex gap-2 sm:gap-3 flex-shrink-0">
                <button
                  onClick={() => setShowCart(true)}
                  className="px-3 py-2 sm:px-4 sm:py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-xs sm:text-sm font-medium flex items-center gap-1"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  <span className="hidden sm:inline">Ver</span>
                </button>
                <button 
                  onClick={finalizePurchase}
                  className="px-4 py-2 sm:px-6 sm:py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xs sm:text-sm font-medium flex items-center gap-1"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="hidden sm:inline">Finalizar</span>
                  <span className="sm:hidden">Comprar</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search and Filters */}
      <section className={`py-8 bg-white border-b ${cart.length > 0 ? 'pt-24 sm:pt-28' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Pesquisar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="nome">Ordenar por Nome</option>
              <option value="preco">Ordenar por Preço</option>
              <option value="avaliacao">Ordenar por Avaliação</option>
            </select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  {product.discount > 0 && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                      -{product.discount}%
                    </div>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">Esgotado</span>
                    </div>
                  )}
                  <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                    <FaHeart className="text-gray-400 hover:text-red-500" />
                  </button>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {product.rating} ({product.reviews} avaliações)
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-primary">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => addToCart(product)}
                    disabled={!product.inStock}
                    className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
                      product.inStock
                        ? 'bg-primary text-white hover:bg-secondary'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <FaShoppingCart />
                    {product.inStock ? 'Adicionar ao Carrinho' : 'Esgotado'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-0 sm:p-4">
          {/* Mobile - Full Screen */}
          <div className="sm:hidden w-full h-full bg-white flex flex-col animate-slideIn">
            {/* Mobile Header */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <FaShoppingCart className="text-lg" />
                </div>
                <div>
                  <h2 className="text-lg font-bold">Carrinho</h2>
                  <p className="text-white/80 text-xs">
                    {cart.length} {cart.length === 1 ? 'item' : 'itens'}
                  </p>
                </div>
              </div>
              <button
                onClick={closeCart}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <FaTimes className="text-sm" />
              </button>
            </div>

            {/* Mobile Content */}
            <div className="flex-1 overflow-y-auto">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center p-8">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <FaShoppingCart className="text-3xl text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">Carrinho Vazio</h3>
                  <p className="text-gray-500 mb-6 text-sm">Adicione alguns produtos ao seu carrinho</p>
                  <button
                    onClick={closeCart}
                    className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
                  >
                    Continuar Comprando
                  </button>
                </div>
              ) : (
                <div className="p-4 space-y-4">
                  {cart.map(item => (
                    <div key={item.id} className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        {/* Product Image */}
                        <div className="relative">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg shadow-sm"
                          />
                          <div className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                            {item.quantity}
                          </div>
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">
                            {item.name}
                          </h3>
                          <p className="text-primary font-bold text-base mb-3">
                            {formatPrice(item.price)}
                          </p>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2">
                            <div className="flex items-center bg-white rounded-lg border border-gray-200">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 rounded-l-lg transition-colors"
                                disabled={item.quantity <= 1}
                              >
                                <FaMinus className="text-xs text-gray-600" />
                              </button>
                              <span className="w-10 text-center text-sm font-semibold text-gray-700">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 rounded-r-lg transition-colors"
                              >
                                <FaPlus className="text-xs text-gray-600" />
                              </button>
                            </div>
                            
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-700 p-1.5 hover:bg-red-50 rounded-lg transition-colors"
                              title="Remover item"
                            >
                              <FaTrash className="text-sm" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Footer - Order Summary */}
            {cart.length > 0 && (
              <div className="bg-gray-50 p-4 border-t border-gray-200">
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal ({cart.length} itens)</span>
                    <span className="font-semibold">{formatPrice(getTotalPrice())}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Frete</span>
                    <span className="font-semibold text-green-600">Grátis</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">{formatPrice(getTotalPrice())}</span>
                    </div>
                  </div>
                </div>

                {/* Mobile Action Buttons */}
                <div className="space-y-3">
                  <button 
                    onClick={finalizePurchase}
                    className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-secondary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Finalizar via WhatsApp
                  </button>
                  <button
                    onClick={closeCart}
                    className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Continuar Comprando
                  </button>
                </div>

                {/* Security Badge */}
                <div className="mt-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span>Compra 100% Segura</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Desktop - Modal */}
          <div className="hidden sm:block bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-slideIn">
            {/* Desktop Header */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <FaShoppingCart className="text-xl" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Carrinho de Compras</h2>
                    <p className="text-white/80 text-sm">
                      {cart.length} {cart.length === 1 ? 'item' : 'itens'} no carrinho
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeCart}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <FaTimes className="text-lg" />
                </button>
              </div>
            </div>

            {/* Desktop Content */}
            <div className="flex flex-col lg:flex-row h-[60vh]">
              {/* Items List */}
              <div className="flex-1 p-6 overflow-y-auto">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-12">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <FaShoppingCart className="text-4xl text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">Carrinho Vazio</h3>
                    <p className="text-gray-500 mb-6">Adicione alguns produtos ao seu carrinho</p>
                    <button
                      onClick={closeCart}
                      className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
                    >
                      Continuar Comprando
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map(item => (
                      <div key={item.id} className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                          {/* Product Image */}
                          <div className="relative">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg shadow-sm"
                            />
                            <div className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                              {item.quantity}
                            </div>
                          </div>

                          {/* Product Info */}
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1 line-clamp-2">
                              {item.name}
                            </h3>
                            <p className="text-primary font-bold text-lg mb-3">
                              {formatPrice(item.price)}
                            </p>
                            
                            {/* Quantity Controls */}
                            <div className="flex items-center gap-3">
                              <div className="flex items-center bg-white rounded-lg border border-gray-200">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-l-lg transition-colors"
                                  disabled={item.quantity <= 1}
                                >
                                  <FaMinus className="text-xs text-gray-600" />
                                </button>
                                <span className="w-12 text-center text-sm font-semibold text-gray-700">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-r-lg transition-colors"
                                >
                                  <FaPlus className="text-xs text-gray-600" />
                                </button>
                              </div>
                              
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                                title="Remover item"
                              >
                                <FaTrash className="text-sm" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Order Summary - Desktop */}
              {cart.length > 0 && (
                <div className="lg:w-80 bg-gray-50 p-6 border-l border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Resumo do Pedido</h3>
                  
                  {/* Order Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal ({cart.length} itens)</span>
                      <span className="font-semibold">{formatPrice(getTotalPrice())}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Frete</span>
                      <span className="font-semibold text-green-600">Grátis</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span className="text-primary">{formatPrice(getTotalPrice())}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button 
                      onClick={finalizePurchase}
                      className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-secondary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      Finalizar via WhatsApp
                    </button>
                    <button
                      onClick={closeCart}
                      className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Continuar Comprando
                    </button>
                  </div>

                  {/* Security Badge */}
                  <div className="mt-6 text-center">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      <span>Compra 100% Segura</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Dúvidas sobre os produtos?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nossa equipa de nutricionistas está disponível para esclarecer todas as suas dúvidas 
            e ajudá-lo a escolher os melhores produtos para suas necessidades.
          </p>
          <a href="/contactos" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block">
            Falar com Especialista
          </a>
        </div>
      </section>
    </div>
  );
};

export default Loja;
