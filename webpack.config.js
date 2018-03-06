const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件
const path = require('path');

const config = {
    entry:  __dirname + "/app/main.js",
    output: {
      path: __dirname + "/build",
      filename: "bundle.js"
    },
  module:{
    loaders:[
        {
            test:/\.(js|jsx)$/,
            exclude:/node_modules/,
            loaders:"babel-loader",
            query:{
                presets:['es2015','react']
            }
        },
        {
            test:/\.css$/,
            loader:['style-loader','css-loader']
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
    })
  ],

  devServer: {
    port:8080,
   //colors: true,
   //historyApiFallback: true,
   //inline: true
 }
  
};

module.exports = config;