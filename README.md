
# ToDo List - Projeto Final DCC603

## Descrição do Projeto

Este projeto consiste em uma **ToDo List** desenvolvida como parte do trabalho final da disciplina **DCC603 - Banco de Dados II**. O sistema permite ao usuário criar, visualizar, editar, excluir e marcar tarefas como concluídas. Utiliza um stack web **full-stack**, com o front-end em **EJS** e **Bootstrap**, um back-end em **Node.js** com **Express.js**, e um banco de dados **MongoDB** para armazenamento.

## Funcionalidades Principais

- **Criar Tarefa**: O usuário pode adicionar uma nova tarefa à lista.
- **Visualizar Tarefas**: Todas as tarefas são exibidas na página inicial.
- **Editar Tarefa**: O usuário pode editar o conteúdo de uma tarefa existente.
- **Excluir Tarefa**: O sistema permite a remoção de tarefas.
- **Marcar Tarefa como Concluída**: O usuário pode marcar uma tarefa como concluída ou desmarcar.

## Estrutura do Projeto

- **Front-end**: Desenvolvido com **EJS** para renderização de templates dinâmicos e **Bootstrap** para estilo e responsividade.
- **Back-end**: Utiliza **Node.js** com o framework **Express.js** para lidar com as rotas e as operações de CRUD.
- **Banco de Dados**: **MongoDB** é utilizado para armazenar as informações das tarefas.

## Pré-requisitos

Antes de iniciar o projeto, é necessário ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

## Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

1. Clone o repositório para a sua máquina:

   ```bash
   git clone https://github.com/seu-usuario/todo-list-dcc603.git
   ```

2. Entre no diretório do projeto:

   ```bash
   cd todo-list-dcc603
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   ```

4. Crie um arquivo `.env` na raiz do projeto e adicione a string de conexão com seu banco MongoDB:

   ```bash
   DB_URI=mongodb://localhost:27017/todo-list
   ```

5. Inicie o servidor:

   ```bash
   node --watch server.js
   ```

6. Acesse a aplicação no navegador:

   ```
   http://localhost:8081
   ```

## Tecnologias Utilizadas

- **Node.js**: Plataforma para executar o código JavaScript no servidor.
- **Express.js**: Framework web para Node.js, utilizado para gerenciar rotas e requisições HTTP.
- **MongoDB**: Banco de dados NoSQL, utilizado para armazenar as tarefas.
- **EJS**: Template engine para renderizar o HTML dinâmico.
- **Bootstrap**: Framework CSS para criar uma interface responsiva.

## Melhorias Futuras

- Implementação de autenticação de usuário.
- Adição de funcionalidades como prazo para as tarefas.
- Integração com um serviço de notificações.

## Autor

Desenvolvido por **Venícus Jacob** como parte do trabalho final da disciplina **DCC603 - Banco de Dados II** na **Universidade Federal de Roraima**.