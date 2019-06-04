export default [
  {
    name: "elasticPage",
    path: "/elastic/page",
    meta: {
      name: "测试独立打开的页面"
    },
    component: () =>
      import(/* webpackChunkName: "views/page" */ `../views/page`)
  }
];
