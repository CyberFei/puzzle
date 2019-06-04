import permission from "./permission";

export default {
  state: {
    // 标签页
    tabs: [],
    nowTab: {}
  },
  mutations: {
    // 打开标签
    ADD_TAB: (state, name) => {
      let tab = {};
      let pages = permission.state.pages;
      for (let item of pages) {
        if (item.name == name) {
          tab = {
            id: item.name,
            path: item.path,
            name: item.meta.name
          };
          break;
        }
      }
      state.nowTab = tab;
      for (var i in state.tabs) if (tab.id == state.tabs[i].id) return;
      state.tabs.push(tab);
    },
    // 关闭标签
    DEL_TAB: (state, index) => {
      state.tabs.splice(index, 1);
    },
    // 关闭其他
    DEL_OTHERS: (state, index) => {
      state.tabs = [state.tabs[index]];
    },
    // 关闭所有
    CLEAR_TAB: state => {
      state.tabs = [];
    },
    // 设置当前标签
    SET_NOWTAB: (state, tab) => {
      state.nowTab = tab;
    },
    // 删除当前标签
    CLEAR_NOWTAB: state => {
      state.nowTab = {};
    }
  },
  getters: {
    tabs: state => state.tabs,
    nowTab: state => state.nowTab
  }
};
