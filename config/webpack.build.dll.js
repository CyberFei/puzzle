const webpack = require("webpack");
const path = require("path");

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
    filename: "[name].bundle.js",
    path: path.join(__dirname, "../static/dll"),
    library: "[name]_library"
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, "../static/dll", "[name].manifest.json"),
      name: "[name]_library"
    })
  ]
};
