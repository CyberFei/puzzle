var loadjs = require("loadjs");

export default (type, name) => {
  return new Promise((resolve, reject) => {
    loadjs(`./${type}/${name}/${name}.js`, {
      success: () => {
        window.PUZZLE_SUCCESS = window.PUZZLE_SUCCESS || [];
        window.PUZZLE_SUCCESS.push(name);
        resolve({ default: window[type + "_" + name].default });
      },
      error: err => {
        window.PUZZLE_FAILURE = window.PUZZLE_FAILURE || [];
        window.PUZZLE_FAILURE.push(name);
      }
    });
  });
};
