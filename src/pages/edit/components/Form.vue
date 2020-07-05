<template>
  <div class="form">
    <textarea v-model="text1"></textarea>
    <textarea v-model="text2"></textarea>
    <textarea v-model="text3"></textarea>
    <textarea v-model="text4"></textarea>
    <input type="checkbox" v-model="check1">check1
    <input type="checkbox" v-model="check2">check2
    <input type="checkbox" v-model="check3">check3
    <input type="checkbox" v-model="check4">check4
    <input type="checkbox" v-model="check5">check5
  </div>
</template>
git remote add origin https://github.com/tumonagaShinobu/my-project

<script>
import {mapState} from 'vuex';
//https://qiita.com/youdie/items/417ed2df1bcb6a60001c veeValidate
export default {
  name: 'Form',
  computed: mapState({
    text1: "text1",
    text2: "text2",
    text3: "text3",
    text4: "text4",
    check1: state => state.checkbox.check1,
    check2: state => state.checkbox.check2,
    check3: state => state.checkbox.check3,
    check4: state => state.checkbox.check4,
    check5: state => state.checkbox.check5,
  })
}
</script>

<style>

</style>