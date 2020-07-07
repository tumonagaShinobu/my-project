import Vue from "vue";
import Router from "vue-router";

import Confirm from "@/pages/confirm/components/Contents";
import Edit from "@/pages/edit/App";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    { path: "/confirm", component: Confirm },
    { path: "/edit", component: Edit },
  ],
});

export default router;
