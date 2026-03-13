FROM node:22-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm
RUN pnpm install

COPY . .

ENV DATABASE_URL=postgresql://postgres:mysecretpassword@localhost:5432/postgres

RUN DATABASE_URL=$DATABASE_URL npx prisma generate

RUN pnpm run build

CMD [ "pnpm", "run", "dev:docker" ]