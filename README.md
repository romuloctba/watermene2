# WaterMene V2

<p align="center">
    <img src="./public/favicon.png" alt="WaterMene V2 Favicon" width="256" />
    <br />
   <img src="https://img.shields.io/badge/watermene-v2-green" alt="Watermene V2" />
</p>



| Link   |Badge|
| ------|----| 
| https://romuloctba.github.io/watermene2|[![GitHub Pages](https://img.shields.io/github/deployments/romuloctba/watermene2/github-pages?label=GitHub%20Pages&logo=github)](https://romuloctba.github.io/watermene2) |



## Bem-vindo ao WaterMene V2!

Esta versão do WaterMene foi completamente reimaginada e reconstruída do zero, oferecendo um mecanismo personalizado especializado em Menes.

Isso soa legal e não significa muito, mas, enquanto a versão anterior, V1, dependia do Watermark.js, esta não depende.

## Sobre o Projeto
O WaterMene V2 é construído usando o bundler [Vite](https://vitejs.dev/) e o gerenciador de pacotes [pnpm](https://pnpm.io/).

Para executar o projeto em sua máquina local, certifique-se de ter o (Node.js 18)[https://nodejs.org/download/release/latest-v18.x/] instalado.

Siga as etapas abaixo para começar:

### Pré-requisitos
- Node.js 18

### Instalação
1. Instale o pnpm globalmente executando o seguinte comando:
   ```
   $ npm i -g pnpm
   ```

2. Instale as dependências do projeto executando o seguinte comando:
   ```
   $ pnpm install
   ```

### Desenvolvimento

Inicie o servidor de desenvolvimento executando o seguinte comando:

```
$ pnpm dev
```

Isso iniciará o aplicativo e exibirá uma URL em seu terminal. Você pode abrir esta URL em seu navegador. Qualquer alteração que você fizer no código será atualizada automaticamente na tela.

### Construção para Produção
Para gerar uma versão publicável do aplicativo, execute o seguinte comando:
```
$ pnpm build
```
Este comando irá gerar uma pasta `dist` contendo a versão otimizada e agrupada do aplicativo. Você pode então fazer o upload desta pasta para um servidor estático para implantação.

### Implantação com o GitHub Pages
Se você fizer um fork deste repositório, poderá facilmente implantar o aplicativo usando o GitHub Pages. Siga as etapas abaixo:

1. Ative o GitHub Pages para o repositório forkado.
2. Crie um lançamento fazendo upload de uma tag.
3. Quando uma nova tag for criada, o GitHub Actions implantará automaticamente o aplicativo.

## Contato
Se você tiver alguma dúvida ou sugestão sobre este projeto, fique à vontade para abrir uma issue!

Divirta-se fazendo Menes com o WaterMene V2!

---

# WaterMene V2 - English

## Welcome to WaterMene V2! 

This version of WaterMene has been completely reimagined and rebuilt from the ground up, offering a custom engine specialized in Menes. 

This sounds cool and doesn't mean much, but while the previous version, V1, relied on Watermark.js, this one does not.

## About the Project
WaterMene V2 is built using the [Vite](https://vitejs.dev/) bundler and the [pnpm](https://pnpm.io/) package manager. 

To run the project on your local machine, ensure you have (Node.js 18)[https://nodejs.org/download/release/latest-v18.x/] installed. 

Follow the steps below to get started:

### Prerequisites
- Node.js 18

### Installation
1. Install pnpm globally by running the following command:
   ```
   $ npm i -g pnpm
   ```

2. Install project dependencies by running the following command:
   ```
   $ pnpm install
   ```

### Development


Start the development server by running the following command:

```
$ pnpm dev
```

This will launch the application and display a URL in your terminal. You can open this URL in your browser. Any changes you make to the code will automatically trigger a screen refresh.

### Building for Production
To generate a publishable version of the application, run the following command:
```
$ pnpm build
```
This command will generate a `dist` folder containing the optimized and bundled version of the application. You can then upload this folder to a static server for deployment.

### Deployment with GitHub Pages
If you fork this repository, you can easily deploy the application using GitHub Pages. Follow the steps below:

1. Enable GitHub Pages for your forked repository.
2. Create a release by uploading a tag.
3. When a new tag is created, GitHub Actions will automatically deploy the application.


## Contact
If you have any questions or suggestions regarding this project, feel free to open an issue!

Happy mene-making with WaterMene V2!