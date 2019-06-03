import Vue from "vue";
import Vuex from "vuex";
// 模块
import core from "./modules/core";

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    core
  }
});
export default store;
