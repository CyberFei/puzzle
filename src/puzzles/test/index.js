import Router from "./scripts/router";
import RouterStatic from "./scripts/routerStatic";

export default myRuntimePublicPath => {
  __webpack_public_path__ = myRuntimePublicPath;
  return {
    router: Router,
    routerStatic: RouterStatic,
    store: {}
  };
};
