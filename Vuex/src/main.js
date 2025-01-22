import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    imcrement(state) {
      state.count++;
    },
  },
});

const app = createApp(App);
app.use(store);
app.mount('#app');