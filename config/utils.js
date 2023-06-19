const path = require("path");
const fs = require("fs");

const webpack = require("webpack");

exports.resolve = dir => path.join(__dirname, "..", dir);

// 获取文件夹目录
const getAllDirs = function(mypath = ".") {
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
exports.getAllDirs = getAllDirs;

// 获取文件目录
const getAllFiles = function(mypath = ".") {
  const items = fs.readdirSync(mypath);
  let result = [];
  items.map(item => {
    let temp = path.join(mypath, item);
    if (fs.statSync(temp).isFile()) result.push(item);
  });
  return result;
};
exports.getAllFiles = getAllFiles;

// 将 Webpack 打包封装成 Promise
exports.webpackPromise = config =>
  new Promise((resolve, reject) => {
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

const requireContext = (directory, recursive = true, regExp = /\.js$/) => {
  const context = {}

  function readDirectory(directory) {
    const files = fs.readdirSync(directory)
    files.forEach(file => {
      const filePath = path.join(directory, file)
      if (fs.statSync(filePath).isDirectory()) {
        if (recursive) {
          readDirectory(filePath)
        }
      } else if (regExp.test(file)) {
        const moduleName = path.parse(file).name
        context[moduleName] = require(filePath)
      }
    })
  }

  readDirectory(directory)
  return context
}

exports.requireContext = requireContext

// 获取 dll
exports.getDlls = function() {
  let dlls = ["core", "puzzle"];
  let dllNames = [];
  for (let item of dlls) {
    // const dllName = require(`../static/dll/${item}.manifest.json`).name.split(
    //   "_"
    // );
    // dllNames.push(`./static/dll/${dllName[0]}.${dllName[1]}.dll.js`);
    let fileName
    const dllFileObj = requireContext(
      path.resolve(__dirname, `../static/dll/${item}`),
      true,
      /\.manifest\.json$/
    )
    Object.keys(dllFileObj).forEach(name => {
      fileName = name
    })
    const dllName = fileName.split('.')
    dllNames.push(
      `./static/dll/${dllName[0]}/${dllName[0]}.${dllName[1]}.dll.js`
    )
  }
  return dllNames;
};
