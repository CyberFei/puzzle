<template>
  <router-view class="view" />
</template>

<script>
import { getMenus } from "./api/frame";
import _import from "./scripts/_import";
import _import_map from "./scripts/_import_map";
import { handleMenus } from "./scripts/utils";

export default {
  name: "app",
  methods: {
    async init() {
      document.title = PUZZLE_CONFIG.appName;
      let res = await getMenus();
      // 保存菜单
      let menus = res.data;
      this.$store.commit("SET_MENUS", menus);

      // 获取缓存map
      const modulesMap = await _import_map();

      // 获取架构
      let frame = await _import(
        "frames",
        localStorage.getItem("frame") || PUZZLE_CONFIG.frame,
        modulesMap
      );
      this.$router.addRoutes(frame.routerStatic);
      // 嵌套路由 / 默认两级路由
      let childRouter = frame.routerStatic.filter(item => item.path == "/");
      // Store
      for (let name in frame.store)
        this.$store.registerModule(name, frame.store[name]);

      let pages = childRouter[0].children;
      // 获取模块 / 异步获取
      for (let puzzle of menus)
        _import("puzzles", puzzle.id, modulesMap)
          .then(p => {
            // 需要生成路由的菜单
            let menusRouter = [];
            handleMenus(puzzle.children, menusRouter);
            // 路由
            childRouter[0].children = p
              .router(menusRouter, puzzle.id)
              .concat(p.routerStatic);
            pages.push(...childRouter[0].children);
            this.$router.addRoutes(childRouter);
            // Store
            for (let name in p.store)
              this.$store.registerModule(name, p.store[name]);
          })
          .catch(err => {});

      // 储存路由表
      this.$store.commit("SET_PAGES", pages);
    }
  },
  created() {
    this.init()
      .then(() => {})
      .catch(err => {
        console.log(err);
      });
  }
};
</script>