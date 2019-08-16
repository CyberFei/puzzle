const merge = require("webpack-merge");
const common = require("./webpack.common.js");
// HTML 模板
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 静态资源复制
const CopyWebpackPlugin = require("copy-webpack-plugin");

// 路径获取
const { resolve, getDlls } = require("./utils");

module.exports = merge(common, {
  mode: "development",
  entry: {
    app: "./src/core/"
  },
  output: {
    publicPath: "/"
  },
  devtool: "inline-source-map",
  devServer: {
    // 热重载
    hot: true,
    // 错误显示在页面中
    overlay: true,
    // 信息打印
    stats: "errors-only",
    // 自动打开
    open: false,
    // 代理
    proxy: {
      "/api": "http://localhost:8888"
    }
    // history 模式
    // historyApiFallback: {
    //   index: "src/index.html"
    // }
  },
  plugins: [
    // HTML 模板
    new HtmlWebpackPlugin({
      template: "public/index.html",
      dlls: getDlls()
    }),
    // 静态资源复制
    new CopyWebpackPlugin([
      {
        from: resolve("static"),
        to: "static",
        ignore: [".*"]
      },
      {
        from: resolve("public/config.js"),
        to: "config.js"
      },
      {
        from: resolve("public/favicon.ico"),
        to: "favicon.ico"
      }
    ])
  ]
});
