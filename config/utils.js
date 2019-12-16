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

// 生成模块 map
exports.generateModulesMap = function() {
  let modulesMap = {};
  function getModules(type) {
    const modules = getAllDirs(`./dist/${type}`);
    for (let item of modules) {
      let files = getAllFiles(`./dist/${type}/${item}`);
      for (let file of files) {
        if (file.indexOf(item) > -1) {
          modulesMap[item] = file.split(".")[1];
        }
      }
    }
  }
  getModules("frames");
  getModules("puzzles");

  let modulesMapString = "";
  for (let key in modulesMap)
    modulesMapString += `
  ${key}: "${modulesMap[key]}",`;

  fs.writeFile(
    "./dist/map.js",
`var modulesMap = {${modulesMapString}
}`,
    function() {}
  );
};

// 获取 dll
exports.getDlls = function() {
  let dlls = ["core", "puzzle"];
  let dllNames = [];
  for (let item of dlls) {
    const dllName = require(`../static/dll/${item}.manifest.json`).name.split(
      "_"
    );
    dllNames.push(`./static/dll/${dllName[0]}.${dllName[1]}.dll.js`);
  }
  return dllNames;
};
