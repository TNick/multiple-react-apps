FROM node:18-slim

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV BUILD_PATH="/build"
ENV PUBLIC_URL="/"

RUN corepack enable

COPY . /app
WORKDIR /app

RUN pnpm install --prod --frozen-lockfile

ENTRYPOINT ["pnpm", "run", "build"]
