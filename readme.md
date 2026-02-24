## Requirements

- Git
- Docker
- Node.js

## Installation instructions

```
git clone https://github.com/gideon-merrick/todo-app.git
cd todo-app
cp .env.example .env
npm install
docker compose up -d
npm run db:migrate
npm run db:generate
npm run dev
```
