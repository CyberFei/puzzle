const app = {
  state: {
    menus: []
  },
  mutations: {
    SET_MENUS: (state, menus) => {
      state.menus = menus;
    }
  },
  getters: {
    menus: state => state.menus
  }
};
export default app;
