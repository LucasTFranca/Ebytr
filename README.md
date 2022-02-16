# Ebytr - FrontEnd

Ebytr - front end é uma simples aplicação de todo list, utilizando `reactjs` e `axios`.

Com aplicação você pode criar tarefas, edita-las, selecionar se foi concluida e até
mesmo excluí-la. 


## Requisitos

- Node js
- Npm

## Tecnologias Utilizadas

- React js
- Axios
- React Router
- Cypress
- EsLint
- PropTypes


## Instalação

Primeiro clone o repositorio utilizando o comando abaixo:

```bash
git@github.com:dev-lucasteixeira/Ebytr.git
cd Ebytr/frontEnd
```

Agora instale as dependencias do projeto:

```bash
npm install
```

## Como Utilizar

Para utilizar o projeto primeiro precisamos instalar as dependencias e inicar o [servidor](#Ebytr - BackEnd).

Depois de inciar o servidor utilize o comando abaixo para iniciar a aplicação:

```bash
npm start
```

## Como Testar

Para testar o front end você precisa remover todas as tarefas adicionadas.

Depois de deixar sem nenhuma tarefa basta utilizar o comando:

```bash
npm test
```

E selecionar o arquivo project.spec.js.

---

# Ebytr - BackEnd

Ebytr - back end é uma simples api, utilizando `nodejs` e `express`.

Com a api você pode criar tarefas, edita-las, remove-las e buscar 
por todas tarefas existentes.


## Requisitos

- Node js
- Npm

## Tecnologias Utilizadas

- Node js
- Cors
- Jois
- Jest
- EsLint
- MongoDb


## Instalação

Primeiro entre no repositorio de back end utilizando o comando:

```bash
cd Ebytr/backEnd
```

Agora instale as dependencias do projeto:

```bash
npm install
```

## Como Utilizar

Para utilizar a api é so utilizar o comando abaixo:

```bash
npm start
```

## Como Testar

Para testar o back end você precisa rodar o comando:

```bash
npm test
```
