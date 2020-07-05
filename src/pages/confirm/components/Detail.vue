<template>
  <div class="detail">
    <p>{{text1}}</p>
    <p>{{text2}}</p>
    <p>{{text3}}</p>
    <p>{{text4}}</p>
    <input type="checkbox" @click.prevent v-model="check1">check1
    <input type="checkbox" @click.prevent v-model="check2">check2
    <input type="checkbox" @click.prevent v-model="check3">check3
    <input type="checkbox" @click.prevent v-model="check4">check4
    <input type="checkbox" @click.prevent v-model="check5">check5
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'Detail',
  //参考:https://qiita.com/Statham/items/046649bff81c00ba275e
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