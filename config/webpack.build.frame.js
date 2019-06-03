const getAllDirs = require("./utils").getAllDirs;
const webpackPromise = require("./utils").webpackPromise;

const _common = require("./webpack.build.common");
// 获取参数
let frame = process.env.npm_config_name;

// 构建单个
if (frame) module.exports = _common("frames", frame);
// // 构建所有
// else {
//   async function build() {
//     frame = getAllDirs("./src/frames");
//     for (let item of frame) await webpackPromise(_common("frames", item));
//   }
//   build();
// }
