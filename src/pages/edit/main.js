import Vue from "vue";
import App from "@/pages/list/App";
//import router from "./router";
import store from "@/store"

new Vue({
  store,
  //router,
  render: (h) => h(App),
}).$mount("#app");
