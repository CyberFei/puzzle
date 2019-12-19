// 模拟数据
import menus from "./mock/menus";
import user from "./mock/user";

export const getUser = () =>
  new Promise(resolve =>
    setTimeout(() => {
      if (sessionStorage.getItem("frame"))
        user.frame = JSON.parse(sessionStorage.getItem("frame"));
      resolve(user);
    }, 100)
  );

export const getMenus = () =>
  new Promise(resolve => setTimeout(() => resolve(menus), 100));
