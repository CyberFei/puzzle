// export function getMenus() {
//   return axios(LOCAL_CONFIG.api.frame + "/menus");
// }

import menus from "./menus";

export function getMenus() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: menus
      })
    }, 100);
  })
}
