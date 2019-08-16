var loadjs = require("loadjs");

export default (type, name, modulesMap) =>
  new Promise((resolve, reject) => {
    loadjs(
      `./${type}/${name}/${name}${
        modulesMap[name] ? "." + modulesMap[name] : ""
      }.js`,
      {
        success: () => {
          window.PUZZLE_SUCCESS = window.PUZZLE_SUCCESS || [];
          window.PUZZLE_SUCCESS.push(name);
          resolve({ default: window[type + "_" + name].default });
        },
        error: err => {
          window.PUZZLE_FAILURE = window.PUZZLE_FAILURE || [];
          window.PUZZLE_FAILURE.push(name);
          reject(err);
        }
      }
    );
  });
