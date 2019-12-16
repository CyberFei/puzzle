const app = {
  state: {
    user: {},
    menus: []
  },
  mutations: {
    SET_USER: (state, user) => (state.user = user),
    SET_MENUS: (state, menus) => (state.menus = menus)
  },
  getters: {
    user: state => state.user,
    menus: state => state.menus
  }
};
export default app;
