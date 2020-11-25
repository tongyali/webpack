const path = require('path')
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
  }
}