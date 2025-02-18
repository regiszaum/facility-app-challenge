# 🚀 Projeto FacilitaTasks - Gerenciador de Tarefas

Bem-vindo ao **FacilitaTasks**! Um gerenciador de tarefas moderno e intuitivo, construído com **Vue 3** e **Vuex**, focado em organização e produtividade.

---

## 🌟 **Recursos**

- ⚡ **Vue.js 3** - Framework progressivo para a construção de interfaces modernas. [Saiba mais](https://vuejs.org/)
- 🔥 **Vuex** - Gerenciamento de estado centralizado para Vue.js. [Saiba mais](https://vuex.vuejs.org/)
- 🎨 **Stylus** - Pré-processador CSS poderoso e flexível para estilização otimizada. [Saiba mais](https://stylus-lang.com/)
- 🖌️ **FontAwesome** - Biblioteca de ícones moderna e estilosa. [Saiba mais](https://fontawesome.com/)
- 🛠️ **Vue Router** - Sistema de roteamento oficial para Vue.js. [Saiba mais](https://router.vuejs.org/)
- 💾 **LocalStorage** - Persistência de dados no navegador para manter as tarefas salvas.

---

## 📦 **Configuração**

Antes de começar, certifique-se de instalar as dependências do projeto.

```bash
# Instalar dependências
pnpm install
```

## 🖥️ Servidor de Desenvolvimento
Inicie o servidor de desenvolvimento e visualize o aplicativo em http://localhost:5173.

```bash
# Iniciar servidor de desenvolvimento
pnpm dev
```

## 📦 Produção

```bash
Construir a aplicação:
# Construir para produção
pnpm build
```

## 🛠️ Funcionalidades do Projeto

- ✅ **Adicionar tarefas**
- ❌ **Excluir tarefas**
- 🔄 **Marcar tarefas como concluídas**
- 🔍 **Buscar tarefas por título**
- 🏷️ **Organizar tarefas por prioridade (Urgente, Importante, Outras)**
- 💾 **Persistência de dados no LocalStorage**
- 📱 **Responsividade e experiência otimizada para mobile e desktop**
- 🔔 **Sistema de notificações com Toast personalizado**
- 🔐 **Autenticação e controle de acesso via Vuex**

---

## 🏗️ Estrutura do Projeto

O projeto foi estruturado para facilitar a manutenção e escalabilidade:

| Diretório        | Descrição |
|-----------------|-----------|
| **`src/components`** | Componentes reutilizáveis (botões, inputs, listas, modais) |
| **`src/views`** | Telas principais da aplicação (Dashboard, Tarefas, Login) |
| **`src/store`** | Implementação do Vuex para gerenciamento de estado |
| **`src/router`** | Configuração de rotas e navegação da aplicação |
| **`src/assets`** | Arquivos estáticos como imagens e estilos globais |
| **`src/plugins`** | Plugins personalizados (Toast) |