export default [
  {
    name: "elasticPage",
    path: "/elastic/page",
    meta: {
      title: "测试独立打开的页面"
    },
    component: () =>
      import(/* webpackChunkName: "views/page" */ `../views/page`)
  }
];
