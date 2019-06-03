import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 创建一个路由器实例
const router = new VueRouter({
  mode: "hash",
  base: "__dirname",
  routes: []
});

// 防止路由到错误地址
// router.beforeEach((to, from, next) => {
//   if (to.matched.length > 0)
//     next();
// });

// 错误捕获
// router.onError(err => { });

export default router;
