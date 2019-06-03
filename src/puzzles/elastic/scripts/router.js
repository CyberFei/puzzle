export default function(menusRouter, puzzleName) {
  let router = [];

  // 动态路由
  for (let item of menusRouter)
    router.push({
      name: item.id,
      path: "/" + puzzleName + item.page,
      component: () =>
        import(
          /* webpackChunkName: "views/[request]" */
          `../views${item.page}`
        ),
      meta: {
        puzzleName: puzzleName,
        name: item.name,
        resource: item.resource ? item.resource : []
      }
    });

  return router;
}
