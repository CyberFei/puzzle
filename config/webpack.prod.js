const inquirer = require("inquirer");
const { getAllDirs, generateModulesMap } = require("./utils");
const webpackPromise = require("./utils").webpackPromise;

const _core = require("./webpack.build.core");
const _common = require("./webpack.build.common");

const promptList = [
  {
    type: "checkbox",
    message: "请选择需要打包的架构:",
    name: "frames",
    choices: getAllDirs("./src/frames"),
    validate: function(val) {
      var done = this.async();
      if (val.length == 0) {
        done("请至少选择一个！");
        return;
      }
      done(null, true);
    }
  },
  {
    type: "checkbox",
    message: "请选择需要打包的模块:",
    name: "puzzles",
    choices: getAllDirs("./src/puzzles"),
    validate: function(val) {
      var done = this.async();
      if (val.length == 0) {
        done("请至少选择一个！");
        return;
      }
      done(null, true);
    }
  }
];

(async function() {
  // 选择打包内容
  let answers = await inquirer.prompt(promptList);
  console.log(answers); // 返回的结果

  // 打包核心
  console.log("\n--------------- BUILD CORE ---------------");
  await webpackPromise(_core);

  // 打包架构
  console.log("\n--------------- BUILD FRAMES ---------------");
  for (let item of answers.frames)
    await webpackPromise(_common("frames", item));

  // 打包模块
  console.log("\n--------------- BUILD PUZZLES ---------------");
  for (let item of answers.puzzles)
    await webpackPromise(_common("puzzles", item));
})().then(() => {
  // 处理缓存问题
  generateModulesMap();

  console.log("\n--------------- ALL DONE ---------------\n");
});
