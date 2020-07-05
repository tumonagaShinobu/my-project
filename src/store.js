import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    text1: 'hoge',
    text2: 'foo',
    text3: 'piyo',
    text4: 'puyo',
    checkbox: {
      check1: true,
      check2: false,
      check3: false,
      check4: false,
      check5: false,
    },
    status: false
  },
  //ゲッター
  getters: {
    text1(state) {
      return state.text1;
    },
    text2(state) {
      return state.text2;
    },
    text3(state) {
      return state.text3;
    },
    text4(state) {
      return state.text4;
    },
    check1(state) {
      return state.checkbox.check1;
    },
    check2(state) {
      return state.checkbox.check2;
    },
    check3(state) {
      return state.checkbox.check3;
    },
    check4(state) {
      return state.checkbox.check4;
    },
    check5(state) {
      return state.checkbox.check5;
    },
    status(state) {
      return state.status;
    }
  },
  //セッター
  mutations: {
    text1(state, paylord) {
      state.text1 = paylord;
    },
    text2(state, paylord) {
      state.text2 = paylord;
    },
    text3(state, paylord) {
      state.text3 = paylord;
    },
    text4(state, paylord) {
      state.text4 = paylord;
    },
    check1(state, paylord) {
      state.checkbox.check1 = paylord; 
    },
    check2(state, paylord) {
      state.checkbox.check2 = paylord;
    },
    check3(state, paylord) {
      state.checkbox.check3 = paylord;
    },
    check4(state, paylord) {
      state.checkbox.check4 = paylord;
    },
    check5(state, paylord) {
      state.checkbox.check5 = paylord;
    },
    status(state, paylord) {
      state.status = paylord;
    }
  },
  actions: {
    updateStatus({commit, getters}) {
      return new Promise((resolve, reject) => {
        if (Math.floor(Math.random() * 10 + 1) > 5) {
          commit('status', !getters.status);
          resolve();
        } else {
          reject('失敗');
        }
      })
    }
  }
})

export default store;