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
npm run db:up
npm run db:migrate
npm run db:generate
npm run dev
```
