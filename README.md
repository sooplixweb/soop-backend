# soop-backend

API NestJS da Sooplix.

## Rodar local

Suba um Postgres local ou use o Docker Compose deste repo:

```bash
docker compose up --build
```

A API fica em `http://localhost:3000/api`.

## Rodar sem Docker

Crie um `.env` baseado em `.env.example`, instale as dependencias e rode:

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm start
```

## Banco local

O `docker-compose.yml` sobe:

- Postgres em `localhost:5432`
- API em `localhost:3000`
- Database `soop_backend`
