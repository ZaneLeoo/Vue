import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import BaseCard from "./components/UI/BaseCard.vue";
import store from "./store/index.js";

const app = createApp(App);
app.component("base-card", BaseCard);
app.use(router);
app.use(store);
app.mount("#app");
