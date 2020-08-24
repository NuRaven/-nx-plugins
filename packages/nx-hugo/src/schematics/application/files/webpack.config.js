const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main.ts',
  },
  output: {
    filename: `js/[name].[chunkhash].js`,
    path: path.resolve(__dirname, 'site/static'),
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new AssetsPlugin({
      filename: 'webpack_assets.json',
      path: path.join(__dirname, 'site/data'),
      prettyPrint: true,
    }),
  ],
};
