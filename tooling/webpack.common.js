const path = require('path');
const webpack = require('webpack');

const integrationName = 'Template';

module.exports = {
  entry: './src/ts/main.ts',
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
  output: {
    filename: `./bitmovin-player-integration-${integrationName.toLowerCase()}.js`,
    path: path.join(__dirname, '../dist/js'),
    libraryTarget: 'umd',
    library: {
      amd: `BitmovinPlayerIntegration${integrationName}`,
      commonjs: `BitmovinPlayerIntegration${integrationName}`,
      root: ['bitmovin', 'player', 'integration', integrationName.toLowerCase()],
    },
  },
  target: ['web', 'es5'],
  optimization: {
    runtimeChunk: false,
  },
};