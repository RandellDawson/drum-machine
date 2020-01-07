
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  resolve: {
    // you can load named modules from any dirs you want.
    // attempts to find them in the specified order.
    modulesDirectories: [
      './src/lib',
      'node_modules'
    ]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        loader: 'babel'
      },
      // bundle CSS into a single CSS file, auto-generating -vendor-prefixes
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: ([
    new CleanWebpackPlugin(),

    // Avoid publishing files when compilation failed:
    new webpack.NoEmitOnErrorsPlugin(),

    // Write out CSS bundle to its own file:
    new MiniCssExtractPlugin('index.css', { allChunks: true })
  ]).concat(process.env.WEBPACK_ENV === 'dev' ? [] : [
    new webpack.optimize.OccurrenceOrderPlugin(),

  ]),

  // Pretty terminal output
  stats: { colors: true },

  // Generate external sourcemaps for the JS & CSS bundles
  devtool: 'source-map',

  // `webpack-dev-server` spawns a live-reloading HTTP server for your project.
  devServer: {
    port: process.env.PORT || 8080,
    contentBase: './src',
    historyApiFallback: true
  }
};