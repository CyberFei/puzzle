const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
// 构建前清理
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// HTML 模板
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 纯静态资源复制
const CopyWebpackPlugin = require("copy-webpack-plugin");

// 路径获取
const { resolve, getDlls } = require("./utils");

const webpackConfig = {
  mode: "production",
  entry: {
    core: "./src/core/"
  },
  output: {
    path: resolve("dist/core"),
    publicPath: "./core/",
    filename: "[name].[fullhash].js",
    // libraryTarget: "var"
    library: {
      type: "var",
      name: "[name]_[fullhash]"
    }
  },
  // devtool: "source-map",
  plugins: [
    new CleanWebpackPlugin(),
    // HTML 模板
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "../index.html",
      dlls: getDlls()
    }),
    // 纯静态资源复制
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve("static"),
          to: resolve("dist/static"),
          globOptions: {
            ignore: [".*"]
          }
        },
        {
          from: resolve("public/config.js"),
          to: resolve("dist/config.js")
        },
        {
          from: resolve("public/favicon.ico"),
          to: resolve("dist/favicon.ico")
        }
      ]
    })
  ]
};

module.exports = merge(common, webpackConfig);
