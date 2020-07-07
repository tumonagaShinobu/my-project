import { extend } from 'vee-validate';
import * as Rules from 'vee-validate/dist/rules';
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

// extend('', {

// });