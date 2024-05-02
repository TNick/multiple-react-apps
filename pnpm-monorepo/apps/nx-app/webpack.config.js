const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');

// Nx plugins for webpack.
module.exports = composePlugins(
    withNx(),
    withReact({
        // Uncomment this line if you don't want to use SVGR
        // See: https://react-svgr.com/
        // svgr: false
    }),
    (config) => {
        // Update the webpack config as needed here.
        // e.g. `config.plugins.push(new MyPlugin())`

        // console.log("Webpack config: %O", config);

        return {
            ...config,
            plugins: config.plugins.map((plugin) => {
                if (plugin.constructor.name === 'WriteIndexHtmlPlugin') {
                    return new plugin.constructor({
                        ...plugin.options,
                        // This simply sets the base element inside index.html
                        baseHref: process.env.PUBLIC_URL || '/',
                        // The prefix used to retrieve assets.
                        deployUrl: process.env.PUBLIC_URL || '',
                    });
                }
                return plugin;
            })
        };
    },
);

/*
Webpack config looks like this for a production build:

{
  context: '/home/bad-behavior/pnpm-monorepo/apps/nx-app',
  target: 'web',
  node: { __dirname: true, __filename: true },
  mode: 'production',
  cache: undefined,
  devtool: false,
  output: {
    libraryTarget: undefined,
    path: '/home/bad-behavior/pnpm-monorepo/dist/apps/nx-app',
    filename: '[name].[contenthash:20].js',
    chunkFilename: '[name].[chunkhash:20].js',
    hashFunction: 'xxhash64',
    pathinfo: false,
    scriptType: 'module',
    crossOriginLoading: false
  },
  watch: undefined,
  watchOptions: { poll: undefined },
  profile: undefined,
  performance: { hints: false },
  experiments: { cacheUnaffected: true },
  ignoreWarnings: [ [Function (anonymous)] ],
  optimization: {
    sideEffects: true,
    minimize: true,
    minimizer: [ [TerserPlugin], [HashedModuleIdsPlugin], [CssMinimizerPlugin] ],
    runtimeChunk: { name: 'runtime' },
    concatenateModules: true,
    emitOnErrors: false,
    moduleIds: 'deterministic',
    splitChunks: {
      defaultSizeTypes: undefined,
      maxAsyncRequests: Infinity,
      cacheGroups: [Object]
    }
  },
  stats: {
    hash: true,
    timings: false,
    cached: false,
    cachedAssets: false,
    modules: false,
    warnings: true,
    errors: true,
    colors: true,
    chunks: true,
    assets: false,
    chunkOrigins: false,
    chunkModules: false,
    children: false,
    reasons: false,
    version: false,
    errorDetails: false,
    moduleTrace: false,
    usedExports: false
  },
  entry: {
    main: [
      '/home/bad-behavior/pnpm-monorepo/apps/nx-app/src/main.tsx'
    ]
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.mjs', '.js', '.jsx' ],
    alias: {
      '/home/bad-behavior/pnpm-monorepo/apps/nx-app/src/environments/environment.ts': '/home/bad-behavior/pnpm-monorepo/apps/nx-app/src/environments/environment.prod.ts'
    },
    mainFields: [ 'browser', 'module', 'main' ]
  },
  externals: [],
  module: {
    unsafeCache: true,
    rules: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object]
    ]
  },
  plugins: [
    NxTsconfigPathsWebpackPlugin { options: [Object] },
    ForkTsCheckerWebpackPlugin { options: [Object] },
    LicenseWebpackPlugin { pluginOptions: [Object] },
    CopyPlugin { patterns: [Array], options: {} },
    WriteIndexHtmlPlugin { options: [Object] },
    DefinePlugin { definitions: [Object] },
    MiniCssExtractPlugin {
      _sortedModulesCache: [WeakMap],
      options: [Object],
      runtimeOptions: [Object]
    }
  ]
}


*/
