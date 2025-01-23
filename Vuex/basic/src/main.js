import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

const store = createStore({
  // like data prop
  state() {
    return {
      count: 0,
      isLogin: false,
    };
  },
  // like methods
  mutations: {
    imcrement(state, payload) {
      state.count += payload;
    },
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
  // like computed
  getters: {
    finalCounter(state) {
      return state.count * 2;
    },
    isLogin(state) {
      return state.isLogin;
    },
  },
  // can execute Asynchronous task
  actions: {
    after(context) {
      setInterval(() => {
        context.commit('imcrement', 15);
      }, 2000);
    },
  },
});

const app = createApp(App);
app.use(store);
app.mount('#app');
