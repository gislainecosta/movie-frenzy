# Desafio Front-end

### *Este teste foi desenvolvido para o cargo de Desenvolvedor web frontend, sendo realizado por Gislaine Costa.* 
<br>
 
## Sumário
  - [Requisitos do projeto](#requisitos-do-projeto)
  - [Ferramentas e Tecnologias Utilizadas](#ferramentas-e-tecnologias-utilizadas)
  - [Iniciar Servidor](#iniciar-servidor)
  - [Iniciar Aplicação](#iniciar-aplicação)
  - [Melhorias Futuras](#melhorias-futuras)
<br>
  
## Requisitos do projeto
- O projeto teve que atender os requisitos contidos [neste documento](https://drive.google.com/file/d/1OQD55GLKL1TwDXioUEz18hnNL1svqgQ6/view?usp=sharing)
<br>

## Ferramentas e Tecnologias Utilizadas
- ReactJs com Vite e Typescript
- React Router DOM
- Redux
- Styled Components
- Material UI
- Git
- NodeJS
-  [API do TMDB para filmes](https://developer.themoviedb.org/docs/getting-started)
- [API do Spotify para músicas](https://developer.spotify.com/)
<br>

## Iniciar Servidor
Este servidor teve como base o repositório [web-api-auth-examples](https://github.com/spotify/web-api-examples), segundo o [tutorial de Vitória Batistoti](https://medium.com/reprogramabr/consumindo-a-api-do-spotify-um-breve-passo-a-passo-fd210312fdd). Inclusive você pode ser este tutorial caso reste alguma dúvida sobre a configuração do mesmo.
1. Vá até a pasta do servidor<br>
`cd spotify-service`

2. Instale as dependências<br>
`yarn`

3. Configure as variáveis de ambiente
  - Vá até a página da [api do Spotify](https://developer.spotify.com/)
  - Após fazer login ou criar uma conta, clique no seu nome de usuário e depois vá em Dashboard.
  - No Dashboard, clique em "create app"
  - Preencha com os dados do seu projeto. O importante aqui é o Website (http://localhost:3000) e o Redirect URIs (http://localhost:8888/callback)
  - Na pasta do servidor crie um arquivo `.env` seguindo como base o `.env.example` e preencha com as suas variáveis de ambiente (Client ID e Client secret)
  - no mesmo arquivo `.env` preencha a variável SPOTIFY_REDIRECT_URI com a sua url de redirecionamento, neste caso http://localhost:8888/callback

4. Inicialize o servidor<br>
`yarn dev` (A aplicação será iniciada em http://localhost:8888/)

<br>


  
## Iniciar Aplicação
Aqui está a aplicação em si, o terminal do servidor deve permanecer aberto com o servidor sendo executado. Abra outro terminal para fazer os passos a seguir
1. Vá até a pasta do servidor<br>
`cd my-app`

2. Instale as dependências<br>
`yarn`

3. Configure as variáveis de ambiente<br>
  - Vá até a página da [configuração da api do TMDB](https://www.themoviedb.org/settings/api)
  - Após fazer login ou criar uma conta, configure a sua API
  - Preencha com os dados do seu projeto. O importante aqui é URL do aplicativo (http://localhost:3000)
  - Na pasta da aplicação crie um arquivo `.env` seguindo como base o `.env.example` e preencha com as suas variáveis de ambiente (API Key)

4. Inicialize a aplicação<br>
`yarn dev` (A aplicação será iniciada em http://localhost:3000/)
<br>

## Melhorias Futuras
1. Testes unitários
2. Responsividade para diferentes telas
3. Deploy com CD e CI
4. Player de músicas integrado na própria aplicação
5. Melhoria nas telas de Loading
6. Criação de um Monorepo ou Turborepo

<br>
