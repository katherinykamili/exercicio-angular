# Portfólio e Exercícios Angular

Projeto desenvolvido para reunir meu portfólio pessoal e os exercícios realizados durante as aulas de Angular. A aplicação apresenta meus projetos, habilidades e formas de contato, além de exemplos práticos dos principais conceitos estudados.

## Acesse o projeto

[Visualizar o site publicado](https://katherinykamili.github.io/exercicio-angular/)

## Funcionalidades

- Página inicial com apresentação, projetos e habilidades;
- galeria de projetos com visualização em grade ou lista;
- navegação entre as páginas por meio do Angular Router;
- alternância entre os temas claro e escuro;
- página de contato;
- componentes reutilizáveis e responsivos;
- documentação visual de componentes com Storybook;
- exercícios práticos de contador, lista de compras, exibição de usuário, autenticação e pré-visualização de imagens.

## Conceitos praticados

- Componentes standalone;
- interpolação e property binding;
- event binding;
- comunicação entre componentes com inputs e outputs;
- signals e atualização de estado;
- diretivas e renderização condicional;
- formulários e eventos do usuário;
- rotas com Angular Router;
- organização e reutilização de componentes;
- responsividade e acessibilidade.

## Tecnologias

- Angular 21;
- TypeScript;
- HTML5;
- CSS3;
- Storybook;
- Vitest;
- Git e GitHub;
- GitHub Pages.

## Como executar localmente

Pré-requisitos: Node.js compatível com o Angular 21 e npm.

```bash
git clone https://github.com/katherinykamili/exercicio-angular.git
cd exercicio-angular
npm install
npm start
```

Abra `http://localhost:4200/` no navegador.

## Comandos disponíveis

```bash
# Servidor de desenvolvimento
npm start

# Build de produção
npm run build

# Testes
npm test

# Storybook
npm run storybook

# Build para publicação no GitHub Pages
npm run deploy:gh
```

O comando `deploy:gh` gera o site na pasta `docs/`, configura o caminho-base do repositório e cria o arquivo `404.html` necessário para o funcionamento das rotas no GitHub Pages.

## Estrutura principal

```text
src/app/
├── components/  # Componentes reutilizáveis e elementos de interface
├── pages/       # Páginas inicial, exercícios e contato
├── compras/     # Exercício de lista de compras
├── usuario/     # Exercício de exibição de dados
└── app.routes.ts
```

## Autora

Desenvolvido por [Katheriny Kamili](https://github.com/katherinykamili) durante os estudos de Desenvolvimento Web Front-End.
