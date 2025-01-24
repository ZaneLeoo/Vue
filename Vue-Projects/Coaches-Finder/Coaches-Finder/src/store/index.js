import { createStore } from "vuex";
import cocah from "./coach";
import messages from "./request-message";
-messages;
const store = createStore({
  modules: {
    coach: cocah,
    messages: messages,
  },
});

export default store;
