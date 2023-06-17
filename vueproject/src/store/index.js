import { createStore } from 'vuex'

const store = createStore({
  state: {
    LoginN:'teste1',
    LoginI:'https://s2.glbimg.com/M3qwmOZ-0o9hpfsT2EJDdVCRRto=/0x0:620x320/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/m/S/A850ieROGGpDNXNqxPXg/2011-11-18-wow-logo.jpg'
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
