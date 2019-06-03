const _common = require("./webpack.build.common");
// 获取参数
let frame = process.env.npm_config_name;

// 构建单个
if (frame) module.exports = _common("frames", frame);

// 构建所有
// TODO
