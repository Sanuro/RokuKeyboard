import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isKeyboardModal: false,
    focus: 'HomeMenu',
  },
  getters: {
  },
  actions: {
  },
  mutations: {
    focusChange(state, payload) {
      state.focus = payload;
    },
    changeModal(state, enable) {
      state.isKeyboardModal = enable;
      console.log('store mutation', state.isKeyboardModal);
    },
  },
  modules: {
  },
  plugins: [
  ],
  strict: true,
});

export default store;
