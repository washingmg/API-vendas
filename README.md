# API em progressão

API REST simples em Node.js, Express e MongoDB para gerenciar vendas mensais.

## Tecnologias

- Node.js (ES Modules)
- Express 5
- MongoDB + Mongoose
- Helmet, CORS (segurança básica)
- ESLint + Prettier (configuração de lint/format)

## Estrutura do projeto

- `api/src/app.js` - configuração do Express e middlewares
- `api/src/server.js` - inicialização da aplicação e conexão com o DB
- `api/src/config/database.js` - conexão com MongoDB
- `api/src/routes/` - definição de rotas (vendaMensal.routes.js)
- `api/src/controllers/` - controladores que orquestram requisições
- `api/src/services/` - lógica de negócio e acesso a dados
- `api/src/models/` - modelos Mongoose
- `api/src/middlewares/` - middlewares (validação, tratamento de erro)
- `api/src/utils/` - utilitários (AppError, response)

## Variáveis de ambiente

Crie um arquivo `.env` dentro de `api/` com as variáveis necessárias:

```
MONGO_URI=mongodb://usuario:senha@host:porta/nomeDB
PORT=3000
```

## Como rodar

1. Instale dependências (dentro da pasta `api`):

```bash
cd api
npm install --legacy-peer-deps
```

2. Rodar em desenvolvimento:

```bash
npm run dev
#ou
node src/server.js
```

3. Endpoints principais

- `POST /vendas` — criar venda (body: `mes`, `ano`, `valorVendido`)
- `GET /vendas` — listar vendas
- `PUT /vendas/:id` — atualizar venda
- `DELETE /vendas/:id` — deletar venda

Exemplo de `POST /vendas`:

```json
{
  "mes": 3,
  "ano": 2025,
  "valorVendido": 12345.67
}
```

## Scripts úteis

- `npm run dev` — iniciar servidor (node)
- `npm run lint` — rodar ESLint
- `npm run lint:fix` — tentar corrigir problemas automaticamente
- `npm run format` — formatar com Prettier


