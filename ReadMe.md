# Multiple React Apps

Shows how to run multiple independent web apps side by side, each with it's own
react-router.

`one-app` and `another-app` were created with `create-react-app`.
`nx-app` was created with `nx` and lives in a pnpm monorepo.

To see it in action:

```bash
docker compose up -d
```

then open your browser at `http://127.0.0.1:7323/`.

## References

- <https://skryvets.com/blog/2018/09/20/an-elegant-solution-of-deploying-react-app-into-a-subdirectory/>
- <https://stackoverflow.com/a/68916787/1742064>
- <https://pnpm.io/docker>
- <https://create-react-app.dev/>
- <https://reactrouter.com/en/main>
- <https://nx.dev/getting-started/intro>
- <https://nx.dev/nx-api/webpack/executors/webpack>
- <https://github.com/nrwl/nx/blob/master/packages/webpack/src/utils/webpack/interpolate-env-variables-to-index.ts>
- <https://github.com/nrwl/nx/blob/master/packages/webpack/src/plugins/write-index-html-plugin.ts>
  