const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html'
})
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const vuePlugin = new VueLoaderPlugin();
module.exports = {
  mode: 'development',
  // entry: path.join(__dirname, './', 'src', '/', 'index.js'),
  // output: {
  //   path: path.join(dirname, './', 'dist'),
  //   filename: 'bundle.js'
  // },
  entry: path.join(__dirname, "./src/index.js"),
  // 设置出口文件
  output: {
    // 设置路径
    path: path.join(__dirname, "./dist"),
    // 设置文件名
    filename: "bundle.js"
  },
  // plugins: [htmlPlugin],
  plugins: [htmlPlugin, vuePlugin],
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader']
    }, {
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader']
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
      // limit 用来设置字节数，小于等于 limit 值的图片，会转成 base64 格式
      // 注意针对的是背景图片
      use: "url-loader?limit=16940"
    }, {
      test: /\.js$/,
      use: "babel-loader",
      // exclude为排除项，意思是不要处理 node_modules 中的 js 文件
      exclude: /node_modules/
    }, {
      test: /\.vue$/,
      loader: "vue-loader",
    }]
  }
}