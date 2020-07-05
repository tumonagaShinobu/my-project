import Vue from "vue";
import Router from "vue-router";

//import Confirm from "@/confirm/App";
import Edit from "@/pages/edit/App";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    //{ name: "Confirm", path: "/", component: Top },
    { path: "/edit", component: Edit },
  ],
});

export default router;
