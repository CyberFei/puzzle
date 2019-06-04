export default {
  state: {
    pages: []
  },
  getters: {
    pages: state => state.pages
  },
  mutations: {
    SET_PAGES: (state, pages) => {
      state.pages = pages;
    }
  }
};
