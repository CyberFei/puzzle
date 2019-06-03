export default {
  elestic: {
    state: {
      key: 1
    },
    mutations: {
      increment(state) {
        state.key++;
      }
    },
    getters: {
      elestic_key: state => state.key
    }
  }
};
