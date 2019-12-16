<template>
  <router-view class="view" />
</template>

<script>
import { getUser, getMenus } from "./api";
import _import from "./scripts/_import";
import _import_map from "./scripts/_import_map";
import { handleMenus } from "./scripts/utils";

export default {
  name: "app",
  methods: {
    async assembleFrame(modulesMap, info) {
      const frame = await _import("frames", info.name, info.host, modulesMap);
      // 路由注册
      this.$router.addRoutes(frame.routerStatic);
      // Store 注册
      for (let name in frame.store)
        this.$store.registerModule(name, frame.store[name]);
      // 嵌套路由 / 默认两级路由
      return frame.routerStatic.filter(item => item.path == "/");
    },
    async assemblePuzzles(modulesMap, menus, childRouter) {
      let pages = childRouter[0].children;
      // 尝试获取模块 / 异步获取
      for (let puzzle of menus)
        _import("puzzles", puzzle.id, puzzle.host, modulesMap)
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
    },
    async init() {
      document.title = PUZZLE_CONFIG.appName;
      // 获取数据
      const [user, menus, modulesMap] = await Promise.all([
        getUser(), // 获取用户信息
        getMenus(), // 获取菜单
        _import_map() // 获取缓存map
      ]);
      this.$store.commit("SET_USER", user);
      this.$store.commit("SET_MENUS", menus);
      // 组装基座并获取基座嵌套路由
      let childRouter = await this.assembleFrame(
        modulesMap,
        localStorage.getItem("frame")
          ? { name: localStorage.getItem("frame") }
          : user.frame
      );
      // 组装模块
      this.assemblePuzzles(modulesMap, menus, childRouter);
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