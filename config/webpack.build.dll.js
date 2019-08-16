const webpack = require("webpack");
const path = require("path");

// 构建前清理
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: {
    // 基本依赖
    core: [
      // Vue 全家桶
      "vue/dist/vue.esm.js",
      "vue-router",
      "vuex",
      // 第三方依赖
      "axios",
      "loadjs"
    ],
    // 模块公共依赖 / 防止模块打包重复代码
    puzzle: ["moment"]
  },
  output: {
    filename: "[name].[chunkhash].dll.js",
    path: path.join(__dirname, "../static/dll"),
    library: "[name]_[chunkhash]"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      path: path.join(__dirname, "../static/dll", "[name].manifest.json"),
      name: "[name]_[chunkhash]"
    })
  ]
};
