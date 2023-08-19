import { createStore } from 'vuex'

const store = createStore({
  state: {
    LoginN:'teste1',
    LoginI:'./assets/logo.png'
  },
  getters: {
  },
  mutations: {
    alterLogin(state, alterL) {
      state.LoginN = alterL;
    },
    alterLoginI(state, alterI) {
      state.LoginI = alterI;
    }    
  },
  actions: {
  },
  modules: {
  }
});

export default store;
