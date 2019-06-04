export default [
  {
    name: "testHome",
    path: "/test/testHome",
    meta: {
      name: "指定的首页"
    },
    component: () =>
      import(/* webpackChunkName: "views/testHome" */ `../views/testHome`)
  }
];
