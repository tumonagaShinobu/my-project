import Vue from "vue";
import App from "@/pages/confirm/App";
import router from "@/router";
import store from "@/store"

import { extend, localize } from 'vee-validate';
import * as Rules from 'vee-validate/dist/rules';
import ja from 'vee-validate/dist/locale/ja.json' // エラーメッセージの日本語化用

localize('ja', ja);
for (const rule in Rules) {
  extend(rule, Rules[rule])
}
// ルールの追加
extend('required', {
  validate(value) {
    return {
      required: true,
      valid: ['', null, undefined].indexOf(value) === -1
    }
  },
  computesRequired: true
});
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
