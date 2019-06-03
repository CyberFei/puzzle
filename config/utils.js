const path = require("path");
const fs = require("fs");

const webpack = require("webpack");

exports.resolve = dir => path.join(__dirname, "..", dir);

// 获取文件目录
exports.getAllDirs = function(mypath = ".") {
  const items = fs.readdirSync(mypath);
  let result = [];
  // 遍历当前目录中所有的文件和文件夹
  items.map(item => {
    let temp = path.join(mypath, item);
    // 若当前的为文件夹
    if (fs.statSync(temp).isDirectory()) {
      // 存储当前文件夹的名字
      result.push(item);
      // 进入下一级文件夹访问
      // result = result.concat(getAllDirs(temp));
    }
  });
  return result;
};

// 将 Webpack 打包封装成 Promise
exports.webpackPromise = function(config) {
  return new Promise((resolve, reject) => {
    webpack(config, function(err, stats) {
      if (err) throw err;
      process.stdout.write(
        stats.toString({
          colors: true,
          modules: false
        }) + "\n"
      );
      resolve();
    });
  });
};
