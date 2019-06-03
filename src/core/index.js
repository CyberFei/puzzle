import Vue from "vue";
import router from "./router";
import store from "./store/";
import App from "./App.vue";

// 接口
import axios from "./api/axios";
window.axios = axios;

if (process.env.NODE_ENV == "development") {
  console.log("development mode");
  //开启debug模式
  Vue.config.debug = true;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
