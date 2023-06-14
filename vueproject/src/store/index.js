import { createStore } from 'vuex'

const store = createStore({
  state: {
    LoginN:'teste1'
  },
  getters: {
  },
  mutations: {
    alterLogin(state, alterL) {
      state.LoginN = alterL;
    }
  },
  actions: {
  },
  modules: {
  }
});

export default store;
