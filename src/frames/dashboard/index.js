import RouterStatic from "./scripts/routerStatic";
import Store from "./store/";

// 样式
import "minireset.css/minireset.min.css";
import "./style/featherIcon/iconfont.css";
import "./style/base.less";

export default myRuntimePublicPath => {
  __webpack_public_path__ = myRuntimePublicPath;
  return {
    routerStatic: RouterStatic,
    store: Store
  };
};
