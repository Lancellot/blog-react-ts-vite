<div align="center">

<img src="https://img.shields.io/badge/Blog-Pessoal-6366f1?style=for-the-badge&logoColor=white" alt="Blog Pessoal" height="40"/>

# Blog Pessoal

**Plataforma moderna para criação e gerenciamento de conteúdo pessoal**

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![NestJS](https://img.shields.io/badge/NestJS-Backend-E0234E?style=flat-square&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

[Sobre](#-sobre-o-projeto) · [Funcionalidades](#-funcionalidades) · [Tecnologias](#-tecnologias) · [Instalação](#-instalação) · [Uso](#-uso) · [Contribuindo](#-contribuindo) · [Autor](#-autor)

</div>

---

## 📌 Sobre o Projeto

**Blog Pessoal** é uma aplicação web full-stack moderna voltada para criação e gerenciamento de conteúdo. A plataforma oferece um sistema completo de autenticação JWT, organização de postagens por temas e uma interface responsiva e intuitiva.

Desenvolvido como projeto de conclusão do programa [Generation Brasil](https://brazil.generation.org/), o projeto aplica práticas modernas de desenvolvimento web com React, TypeScript e design responsivo com Tailwind CSS.

> **Stack:** React + TypeScript (frontend) · NestJS + PostgreSQL (backend)

---

## ✨ Funcionalidades

| Recurso | Descrição |
|---|---|
| 🔐 Autenticação | Login, cadastro e gerenciamento de sessão com JWT |
| 📝 Postagens | Criação, edição, visualização e exclusão de posts |
| 🏷️ Temas | Categorize postagens por temas personalizados |
| 👤 Perfil | Página do usuário com suas postagens |
| 📱 Responsivo | Layout otimizado para desktop, tablet e mobile |
| 🔔 Notificações | Feedback de ações via toast notifications |

---

## 🛠 Tecnologias

### Frontend

| Tecnologia | Versão | Função |
|---|---|---|
| [React](https://reactjs.org/) | 19.2.0 | Biblioteca de UI |
| [TypeScript](https://www.typescriptlang.org/) | 5.9.3 | Tipagem estática |
| [Vite](https://vitejs.dev/) | 7.2.4 | Bundler e dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 4.1.18 | Estilização utility-first |
| [React Router DOM](https://reactrouter.com/) | — | Roteamento SPA |
| [Axios](https://axios-http.com/) | — | Requisições HTTP |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | — | Notificações toast |
| [Phosphor Icons](https://phosphoricons.com/) | — | Biblioteca de ícones |

### Backend

| Tecnologia | Função |
|---|---|
| [NestJS](https://nestjs.com/) | Framework Node.js progressivo |
| [TypeORM](https://typeorm.io/) | ORM para TypeScript |
| [PostgreSQL](https://www.postgresql.org/) | Banco de dados relacional |

---

## 🚀 Instalação

### Pré-requisitos

- [Node.js](https://nodejs.org/) >= 18
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- Backend da aplicação em execução (ver [API](#backend))

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/lancellot/blog-pessoal.git
cd blog-pessoal

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:

```env
VITE_API_URL=http://localhost:4000/api
```

```bash
# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse: **http://localhost:5173**

### Scripts disponíveis

```bash
npm run dev       # Servidor de desenvolvimento com HMR
npm run build     # Build otimizado para produção
npm run preview   # Pré-visualização do build de produção
npm run lint      # Análise estática com ESLint
```

---

## 🎯 Uso

### Fluxo básico

1. **Cadastre-se** — Crie sua conta com nome, e-mail e senha
2. **Faça login** — Acesse o sistema com suas credenciais
3. **Crie temas** — Organize suas postagens com categorias personalizadas
4. **Publique posts** — Escreva e associe postagens aos temas criados
5. **Gerencie conteúdo** — Edite ou remova posts e temas a qualquer momento

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga os passos abaixo:

```bash
# 1. Faça um fork do projeto e clone localmente
git clone https://github.com/seu-usuario/blog-pessoal.git

# 2. Crie uma branch para sua feature ou correção
git checkout -b feature/minha-feature

# 3. Faça commit das suas alterações
git commit -m "feat: adiciona minha feature"

# 4. Envie para o repositório remoto
git push origin feature/minha-feature

# 5. Abra um Pull Request
```

### Convenção de commits

Este projeto adota [Conventional Commits](https://www.conventionalcommits.org/):

| Prefixo | Uso |
|---|---|
| `feat:` | Nova funcionalidade |
| `fix:` | Correção de bug |
| `docs:` | Documentação |
| `style:` | Formatação de código |
| `refactor:` | Refatoração sem mudança funcional |
| `test:` | Testes |

---

## 📄 Licença

Distribuído sob a licença **MIT**. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

## 👤 Autor

**Assis P. Neto**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-assispiresneto-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/assispiresneto/)
[![GitHub](https://img.shields.io/badge/GitHub-lancellot-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/lancellot)
[![Email](https://img.shields.io/badge/Email-contato-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:assis.pires.netors@gmail.com)

---

<div align="center">

Desenvolvido com ❤️ durante o programa **Generation Brasil**

⭐ Se este projeto foi útil, considere deixar uma estrela!

</div>
