# Dev Movies

Aplicação de catálogo de filmes e séries feita com React. Os dados vêm da API do [The Movie Database (TMDB)](https://www.themoviedb.org/).

## O que o projeto oferece

- Página inicial com filme em destaque, trailer e listas de filmes, séries e artistas.
- Página **Filmes** com listas de filmes populares, mais bem avaliados e em breve.
- Página **Séries** com listas de séries populares, mais bem avaliadas e atualmente no ar.
- Carrosséis horizontais com pôsteres e títulos.
- Página de detalhes de filme com gêneros, elenco, vídeos e recomendações.
- Navegação entre páginas com React Router.
- Mensagens de carregamento e erro nas páginas de catálogo.

## Tecnologias

- React 19 e React DOM
- Vite
- React Router
- Styled Components
- Swiper
- Axios
- TMDB API

## Requisitos

- Node.js compatível com a versão do Vite instalada no projeto.
- npm (ou outro gerenciador que respeite o `package-lock.json`, se houver).
- Chave de API do TMDB para obter dados ao vivo.

## Como executar

Na pasta do projeto:

```bash
npm install
npm run dev
```

Abra no navegador o endereço local indicado pelo Vite (normalmente `http://localhost:5173`). Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Configuração da API

As requisições são centralizadas em `src/services/api.js`; os caminhos dos recursos ficam em `src/services/getData.js`. A aplicação usa os endpoints de filmes, séries, pessoas, créditos, vídeos e recomendações do TMDB. O idioma das respostas está configurado como `pt-BR`.

O projeto espera uma chave de API válida do TMDB. Configure-a localmente em `.env` como `VITE_TMDB_API_KEY= sua_chave` (sem o espaço depois do `=`) e reinicie o servidor. Variáveis `VITE_` ficam disponíveis no código que roda no navegador; não coloque credenciais privadas nelas. Se o projeto já tiver uma chave de demonstração configurada em `src/services/api.js`, ela pode deixar de funcionar ou ter limites impostos pelo TMDB. Para uso próprio, prefira uma chave sua e não envie o arquivo `.env` ao Git.

## Estrutura de pastas

```text
src/
├── assets/          # Logo e ícones
├── components/      # Componentes reutilizáveis (Header, Card, Slider...)
├── containers/      # Páginas e catálogo compartilhado
├── layout/          # Layout comum às rotas
├── routes/          # Definição das rotas
├── services/        # Cliente HTTP e funções da API
├── styles/          # Estilos globais
└── utils/           # Funções utilitárias, como URLs das imagens
```

## Rotas

| Caminho | Página |
| --- | --- |
| `/` | Início |
| `/filmes` | Catálogo de filmes |
| `/series` | Catálogo de séries |
| `/detalhe/:id` | Detalhes de um filme |

## Como os catálogos funcionam

`Movies` e `Series` declaram as seções e as funções que buscam cada lista. Ambas passam essas configurações ao componente `Catalog`. O catálogo dispara as requisições, guarda os resultados em estado React e mostra carregamento, conteúdo ou uma mensagem caso as chamadas falhem. `Promise.allSettled` permite renderizar as seções que carregaram mesmo quando uma chamada individual falha.

Cada lista é apresentada pelo componente `Slider`, que transforma seus itens em slides, e cada slide usa `Card` para mostrar pôster e título. Isso evita duplicar a lógica da interface entre as páginas de filmes e séries.

## Scripts disponíveis

| Comando | Ação |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento do Vite |
| `npm run build` | Gera os arquivos de produção em `dist/` |
| `npm run preview` | Serve localmente a última build |
| `npm run lint` | Executa o ESLint no projeto |

## Solução de problemas

- **Catálogo vazio ou erro de rede:** confira a conexão, a chave do TMDB e o console do navegador. O acesso aos dados depende do serviço externo.
- **Pôster sem imagem:** alguns itens podem não ter caminho de imagem cadastrado no TMDB.
- **Rota de detalhes não abre:** a rota atual é para filmes e deve receber o ID numérico do filme.
- **Mudou `.env` e nada aconteceu:** pare e inicie novamente o servidor do Vite.
- **Build falha:** rode `npm install` e examine a primeira mensagem de erro do terminal.

## Para continuar aprendendo

Uma boa ordem para explorar o código é:

1. `src/main.jsx`: ponto de entrada React e configuração do roteador.
2. `src/routes/routes.jsx`: associação entre URLs e páginas.
3. `src/containers/Movies/index.jsx` e `src/containers/Series/index.jsx`: configuração das seções.
4. `src/containers/Catalog/index.jsx`: estado, efeitos, requisições e renderização condicional.
5. `src/services/api.js` e `src/services/getData.js`: comunicação com a API.
6. `src/components/Slider` e `src/components/Card`: apresentação reutilizada dos resultados.

## Créditos

Os metadados e imagens são fornecidos pelo TMDB. Este projeto é um exercício independente e não é afiliado nem endossado pelo TMDB.
