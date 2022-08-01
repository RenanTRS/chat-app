<div align="center">
    <img src="./design/logo.svg" alt="Logo" />
</div>

<p align="center">⚠️ <strong>Under Development!</strong></p>

<p align="center">
  <img src="https://img.shields.io/github/license/renantrs/chat-app?style=for-the-badge" alt="GitHub License" />
  <img src="https://img.shields.io/github/languages/top/renantrs/chat-app?style=for-the-badge" alt="GitHub top language" />
  <img src="https://img.shields.io/github/last-commit/renantrs/chat-app?style=for-the-badge&color=blue" alt="GitHub last commit" />
  <img src="https://img.shields.io/github/issues/renantrs/chat-app?style=for-the-badge&color=orange" alt="GitHub issues open" />
  <img src="https://img.shields.io/github/issues-closed/renantrs/chat-app?style=for-the-badge&color=green" alt="GitHub closed issues" />
  <img src="https://img.shields.io/github/issues-pr/renantrs/chat-app?style=for-the-badge&color=orange" alt="GitHub pull request open" />
  <img src="https://img.shields.io/github/issues-pr-closed/renantrs/chat-app?style=for-the-badge&color=green" alt="GitHub closed pull requests" />
</p>

<p align="center">
    <img src="./design/mobile.gif" alt="Demo on mobile" width="40%"/>
</p>

## About this project

This project is part of my personal portfolio.

## Why?

The purpose of this project was to learn about **WebSocket**

## How to use

To clone and run this project, you'll need **[Git](https://git-scm.com)**, **[node v14.20](https://nodejs.org/en/)** or higher + **[yarn v1.22.15](https://yarnpkg.com)** or higher installed on your computer. From your command line:

```bash
#Clone this repository
$ git clone https://github.com/RenanTRS/chat-app.git

#Go into the repository
$ cd chat-app

#Install dependencies
$ yarn
#or
$ npm i

#Run web (front-end)
$ cd web
$ yarn dev
#or
$ npm run dev

#Run test web (front-end)
$ cd web
$ yarn test
#or
$ npm run test

#Run server (back-end)
$ cd server
$ yarn dev
#or
$ npm run dev

#Generate build server (back-end)
$ cd server
$ yarn build
#or
$ npm run build

#Run build server (back-end)
$ cd server
$ yarn start
#or
$ npm run start
```

## Env Variables

### Web

```
VITE_URL_SERVER = 'your_http_back_end_here'
```

### Server

```
BASE_URL='your_http_front_end_here'
```

## Built with

| Front-End                                                                                                                                                               |                                                                                                                               Back-end |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------: |
| [![Vite](https://img.shields.io/badge/Vite-gray?style=for-the-badge&logo=vite)](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)                          |                    [![NodeJS](https://img.shields.io/badge/NodeJS-darkgreen?style=for-the-badge&logo=node.js)](https://nodejs.org/en/) |
| [![ReactJs](https://img.shields.io/badge/ReactJs-darkblue?style=for-the-badge&logo=react)](https://reactjs.org/)                                                        | [![TypeScript](https://img.shields.io/badge/Typescript-darkblue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/) |
| [![TypeScript](https://img.shields.io/badge/Typescript-darkblue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)                                  |            [![Express](https://img.shields.io/badge/Express-darkgreen?style=for-the-badge&logo=express)](https://expressjs.com/pt-br/) |
| [![Tailwindcss](https://img.shields.io/badge/Tailwindcss-blue?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)                                          |                    [![Cors](https://img.shields.io/badge/Cors-gray?style=for-the-badge&logo=cors)](https://www.npmjs.com/package/cors) |
| [![PostCss](https://img.shields.io/badge/Post%20Css-red?style=for-the-badge&logo=postcss)](https://postcss.org/)                                                        |                                [![Babel](https://img.shields.io/badge/Babel-gray?style=for-the-badge&logo=babel)](https://babeljs.io/) |
| [![React Router Dom](https://img.shields.io/badge/React%20Router%20Dom-2D2D2D?style=for-the-badge&logo=reactrouter)](https://v5.reactrouter.com/web/guides/quick-start) |                      [![Socket.IO](https://img.shields.io/badge/SocketIO-gray?style=for-the-badge&logo=socket.io)](https://socket.io/) |
| [![Socket.IO](https://img.shields.io/badge/SocketIO-gray?style=for-the-badge&logo=socket.io)](https://socket.io/)                                                       |                             [![EsLint](https://img.shields.io/badge/EsLint-gray?style=for-the-badge&logo=eslint)](https://eslint.org/) |
| [![Jest](https://img.shields.io/badge/Jest-c21325?style=for-the-badge&logo=jest)](https://jestjs.io/)                                                                   |                      [![Prettier](https://img.shields.io/badge/Prettier-gray?style=for-the-badge&logo=prettier)](https://prettier.io/) |
| [![Testing Library](https://img.shields.io/badge/Testing%20Library-gray?style=for-the-badge&logo=testinglibrary)](https://testing-library.com/)                         |            [![Dotenv](https://img.shields.io/badge/Dotenv-gray?style=for-the-badge&logo=dotenv)](https://www.npmjs.com/package/dotenv) |
| [![SWC Jest](https://img.shields.io/badge/SWC%20Jest-gray?style=for-the-badge&logo=swc)](https://swc.rs/docs/usage/jest)                                                |                                                                                                                                        |
| [![SWC Core](https://img.shields.io/badge/SWC%20Core-gray?style=for-the-badge&logo=swc)](https://swc.rs/docs/usage/core)                                                |                                                                                                                                        |
| [![EsLint](https://img.shields.io/badge/EsLint-gray?style=for-the-badge&logo=eslint)](https://eslint.org/)                                                              |                                                                                                                                        |
| [![Prettier](https://img.shields.io/badge/Prettier-gray?style=for-the-badge&logo=prettier)](https://prettier.io/)                                                       |                                                                                                                                        |
| [![PhosphorIcons](https://img.shields.io/badge/Phosphor%20Icons-ffd76a?style=for-the-badge&logo=phosphoricons)](https://phosphoricons.com/)                             |                                                                                                                                        |
| [![Yarn](https://img.shields.io/badge/Yarn-darkblue?style=for-the-badge&logo=yarn)](https://yarnpkg.com/)                                                               |                                                                                                                                        |

## Contact

- Email me - renantrsouza@gmail.com
- Connect with me on [LinkedIn](https://www.linkedin.com/in/renantrsouza/)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/renantrs/chat-app/blob/main/LICENSE) file for details.
