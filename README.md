# ClothingStore

Um e-commerce de roupas desenvolvido em React com TypeScript, oferecendo uma experiência de compra moderna e responsiva.

## 🚀 Tecnologias Utilizadas

- **React 18** com TypeScript
- **Vite** como bundler
- **React Router** para navegação
- **Axios** para requisições HTTP
- **React Icons** para ícones
- **CSS Modules** para estilização

## 📋 Funcionalidades

### ✅ Implementadas
- **Catálogo de Produtos**: Exibição de produtos vindos da API FakeStore
- **Sistema de Carrinho**: Adicionar produtos ao carrinho de compras
- **Interface de Login**: Modal para autenticação de usuários
- **Busca de Produtos**: Campo de pesquisa no header
- **Design Responsivo**: Adaptável para diferentes tamanhos de tela
- **Avaliação de Produtos**: Sistema de estrelas com rating
- **Filtragem**: Remove produtos eletrônicos (foco em roupas e acessórios)

### 🔄 Em Desenvolvimento
- Funcionalidade de busca
- Autenticação real de usuários
- Lista de desejos
- Finalização de compras
- Página de recuperação de senha
- Página de criação de conta

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── Error404/          # Página de erro 404
│   ├── Footer/            # Rodapé da aplicação
│   ├── Header/            # Cabeçalho com busca e navegação
│   ├── LoginForm/         # Modal de login
│   ├── Main/              # Componente principal da página inicial
│   ├── ProductCard/       # Card individual do produto
│   └── ProductList/       # Lista de produtos
├── context/
│   ├── AccountContext/    # Contexto para gerenciamento de conta
│   └── ProductContext/    # Contexto para produtos e carrinho
├── layouts/
│   └── DefaultLayout/     # Layout padrão da aplicação
├── styles/
│   └── global.css         # Estilos globais
└── Router.tsx             # Configuração de rotas
```

## 🎨 Design e Responsividade

O projeto utiliza CSS Modules e variáveis CSS para um design consistente:

- **Desktop**: 4 colunas de produtos
- **Tablet** (≤1024px): 3 colunas
- **Mobile** (≤800px): 2 colunas  
- **Mobile pequeno** (≤500px): 1 coluna



## 📦 Instalação e Execução

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**
```bash
git clone https://github.com/flkvio/ecommerce-clothing-store.git
cd ecommerce-clothing-store
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Execute o projeto**
```bash
npm run dev
# ou
yarn dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Gera build de produção
npm run preview      # Visualiza o build de produção
npm run lint         # Executa o linter
```

## 🌐 API Externa

O projeto consome a **FakeStore API** para obter os produtos:
- **Endpoint**: `https://fakestoreapi.com/products/`
- **Filtros**: Remove produtos da categoria "electronics"
- **Dados**: Título, preço, descrição, categoria, imagem e avaliações

## 🗂️ Gerenciamento de Estado

### ProductContext
Gerencia:
- Lista de produtos da API
- Carrinho de compras
- Função para adicionar produtos ao carrinho

### AccountContext
Gerencia:
- Estado de login do usuário
- Visibilidade do modal de login
