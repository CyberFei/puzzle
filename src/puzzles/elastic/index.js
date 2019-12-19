import Router from "./scripts/router";
import RouterStatic from "./scripts/routerStatic";
import Store from "./scripts/store";
// 模块样式
import "./style/style.less";

export default myRuntimePublicPath => {
  __webpack_public_path__ = myRuntimePublicPath;
  return {
    router: Router,
    routerStatic: RouterStatic,
    store: Store
  };
};
