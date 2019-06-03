export default [
  {
    path: "/login",
    component: () =>
      import(/* webpackChunkName: "views/Login" */ "../views/Login")
  },
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "views/Frame" */ "../views/Frame"),
    children: [
      {
        path: "/",
        redirect: "/home"
      },
      {
        path: "/home",
        component: () =>
          import(/* webpackChunkName: "views/Home" */ "../views/Home")
      }
    ]
  }
];
