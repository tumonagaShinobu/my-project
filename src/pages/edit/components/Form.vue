<template>
  <div class="form">
    <validation-observer ref="validationObserver" tag="div">
      <validation-provider v-slot="{ errors }" rules="max:5|required" name="text1">
        <input type="text" v-model="text1" :error-messages="errors">
        <p>{{ errors[0] }}</p>
      </validation-provider>
      <validation-provider v-slot="{ errors }" rules="max:5" name="text1">
        <input type="text" v-model="text2" :error-messages="errors">
        <p>{{ errors[0] }}</p>
      </validation-provider>
      <input type="text" v-model="text3">
      <input type="text" v-model="text4">
      <input type="checkbox" v-model="check1">check1
      <input type="checkbox" v-model="check2">check2
      <input type="checkbox" v-model="check3">check3
      <input type="checkbox" v-model="check4">check4
      <input type="checkbox" v-model="check5">check5
      <button :disabled="isValid">
        <router-link :to="{path:'/confirm'}">確認画面へ</router-link>
      </button>
    </validation-observer>
  </div>
</template>

<script>
import {ValidationProvider, ValidationObserver} from 'vee-validate';
//https://qiita.com/youdie/items/417ed2df1bcb6a60001c veeValidate
export default {
  name: 'Form',
  data() {
    return {
      isValid: this.$ref.validationObserver.validated()
    }
  },
  components: {ValidationProvider, ValidationObserver},
  computed: {
    text1: {
      get() {
        return this.$store.getters.text1;
      },
      set(val) {
        this.$store.commit('text1', val);
      }
    },
    text2: {
      get() {
        return this.$store.getters.text2;
      },
      set(val) {
        this.$store.commit('text2', val);
      }
    },
    text3: {
      get() {
        return this.$store.getters.text3;
      },
      set(val) {
        this.$store.commit('text3', val);
      }
    },
    text4: {
      get() {
        return this.$store.getters.text4;
      },
      set(val) {
        this.$store.commit('text4', val);
      }
    },
    check1: {
      get() {
        return this.$store.getters.check1;
      },
      set(val) {
        this.$store.commit('check1', val);
      }
    },
    check2: {
      get() {
        return this.$store.getters.check2;
      },
      set(val) {
        this.$store.commit('check2', val);
      }
    },
    check3: {
      get() {
        return this.$store.getters.check3;
      },
      set(val) {
        this.$store.commit('check3', val);
      }
    },
    check4: {
      get() {
        return this.$store.getters.check4;
      },
      set(val) {
        this.$store.commit('check4', val);
      }
    },
    check5: {
      get() {
        return this.$store.getters.check5;
      },
      set(val) {
        this.$store.commit('check5', val);
      }
    }
  }
}
</script>

<style>
button:disabled {
  background-color: red;
}
</style>