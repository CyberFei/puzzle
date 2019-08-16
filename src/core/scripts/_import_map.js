var loadjs = require("loadjs");

export default () =>
  new Promise((resolve, reject) => {
    process.env.NODE_ENV == "production"
      ? loadjs(`./map.js?${Date.now()}`, {
          success: () => {
            resolve(modulesMap);
          },
          error: err => {
            reject(err);
          }
        })
      : resolve(null);
  });
