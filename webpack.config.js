const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html'
})
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
  plugins: [htmlPlugin],
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  }
}