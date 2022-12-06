const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
// 构建前清理
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 路径获取
const resolve = require("./utils").resolve;

module.exports = function(type, puzzle) {
  let entry = {};
  entry[puzzle] = `./src/${type}/${puzzle}/`;

  const webpackConfig = {
    mode: "production",
    entry,
    output: {
      path: resolve(`dist/${type}/${puzzle}`),
      filename: "[name].js",
      chunkFilename: "[name].[fullhash].js",
      library: `${type}_${puzzle}`,
      libraryTarget: "umd"
    },
    // devtool: "source-map",
    optimization: {
      chunkIds: 'named'
    },
    plugins: [
      new CleanWebpackPlugin(),
      // 解决动态模块导入打包重名的问题
      // new webpack.NamedChunksPlugin(chunk => puzzle + "/" + chunk.name)
    ]
  };

  return merge(common, webpackConfig);
};
