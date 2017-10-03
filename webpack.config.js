const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');




var APP_DIR = path.resolve(__dirname, './src');
var BUILD_DIR = path.resolve(__dirname, './dist');



var commonConfig = {
  entry: {
    app: APP_DIR+'/index.jsx'
  },
  output: {
    path: BUILD_DIR,
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        include: APP_DIR,
        use:ExtractTextPlugin.extract({
          fallback:'style-loader',
          use:["css-loader","sass-loader",'postcss-loader']
        })
      }, {
        test: /\.(js|jsx)$/,
        include: APP_DIR,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env', 'react'
            ],
            plugins: [
              ["babel-plugin-styled-components"]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    /*index.html generator*/
    //new HtmlWebpackPlugin({title:'webpack demo'})
    new ExtractTextPlugin("style.css")
  ]
}
const productionConfig = () => commonConfig;

const developmentConfig = () => {
  const config = {
    devServer: {
      historyApiFallback: true,
      stats: 'errors-only',
      host: process.env.HOST, // Defaults to `localhost`
      port: process.env.PORT, // Defaults to 8080
      contentBase: path.join(__dirname, './dist')
    }
  };

  return Object.assign({}, commonConfig, config);
};

module.exports = (env) => {
  console.log('env', env);
  return commonConfig;

  if (env === 'production') {
    return productionConfig();
  }
  return developmentConfig();
};
