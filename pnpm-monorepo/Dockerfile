FROM node:18-slim as base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV BUILD_PATH="/build"
ARG PUBLIC_URL="/"

RUN corepack enable

COPY . /src
WORKDIR /src

RUN pnpm install --frozen-lockfile
# RUN pnpm exec nx run nx-app:build
RUN pnpm exec nx run-many --target=build

FROM base AS nx-app
ENV PUBLIC_URL="/"
COPY --from=base /src/dist/apps/nx-app /tmp/build
ENTRYPOINT ["/bin/bash", "-c", "cp -r /tmp/build/* $BUILD_PATH/"]
