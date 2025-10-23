# Nutriz Consultórios

Website institucional da Nutriz Consultórios - A Sua Saúde em Boas Mãos.

## 🚀 Deploy na Railway

### Pré-requisitos
- Conta na [Railway](https://railway.app)
- Git configurado

### Passos para Deploy

1. **Conectar repositório à Railway:**
   - Acesse [railway.app](https://railway.app)
   - Clique em "New Project"
   - Selecione "Deploy from GitHub repo"
   - Conecte seu repositório

2. **Configuração automática:**
   - A Railway detectará automaticamente que é um projeto Vite
   - Usará os arquivos de configuração: `railway.json`, `nixpacks.toml` e `Procfile`

3. **Variáveis de ambiente (se necessário):**
   - Adicione no painel da Railway se precisar de variáveis específicas

4. **Deploy:**
   - O deploy acontecerá automaticamente após o push para o repositório
   - A Railway fará build e deploy do projeto

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📁 Estrutura do Projeto

```
nutriz-consultorio/
├── public/
│   └── favicon.svg          # Favicon personalizado
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Cabeçalho com navegação
│   │   └── Footer.jsx       # Rodapé
│   ├── pages/
│   │   ├── Home.jsx         # Página inicial
│   │   ├── Servicos.jsx     # Página de serviços
│   │   ├── Portfolio.jsx    # Página de portfólio
│   │   ├── Galeria.jsx      # Página de depoimentos
│   │   ├── Loja.jsx         # Loja de equipamentos
│   │   ├── SobreNos.jsx     # Página sobre nós
│   │   └── Contactos.jsx    # Página de contatos
│   ├── App.jsx              # Componente principal
│   ├── main.jsx             # Ponto de entrada
│   └── index.css            # Estilos globais
├── railway.json             # Configuração da Railway
├── nixpacks.toml           # Configuração Nixpacks
├── Procfile                # Comando de start
└── package.json            # Dependências e scripts
```

## 🎨 Funcionalidades

- ✅ Design responsivo (mobile e desktop)
- ✅ Navegação entre páginas
- ✅ Formulário de contato com integração WhatsApp
- ✅ Loja de equipamentos médicos com carrinho
- ✅ Galeria de depoimentos e atividades
- ✅ Portfólio de serviços
- ✅ Integração com Google Maps
- ✅ Animações e transições suaves

## 🔧 Tecnologias

- **React 19** - Biblioteca de interface
- **Vite** - Build tool e dev server
- **TailwindCSS** - Framework CSS
- **React Router DOM** - Roteamento
- **React Icons** - Ícones

## 📱 Integrações

- **WhatsApp** - Formulários de contato e carrinho
- **Google Maps** - Localização
- **Google Drive** - Imagens e vídeos

## 🚀 Deploy Status

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template)

---

**Nutriz Consultórios** - Porque nutrição e vida