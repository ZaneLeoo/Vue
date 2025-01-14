const app = new Vue({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
  beforeCreate() {
    // Data is no init
    console.log("beforeCreate()");
    console.log(this.message);
  },
  created() {
    // Data is already init
    console.log("created()");
    console.log(this.message);
  },
  beforeMount() {
    // Template is already rendered,but not mounted
    console.log("beforeMount()");
  },
  mounted() {
    // Template is mounted
    console.log("mounted()");
  },
  beforeUpdate() {
    // Data is changed,but not synced to template
    console.log("beforeUpdate()");
    console.log(this.message);
  },
  updated() {
    // Data is changed,template is also
    console.log("updated()");
    console.log(this.message);
  },
  beforeDestroy() {
    // Vue instance ready destroy,but you can visit the data,just not to reactivity
    console.log("beforeDestroy()");
    console.log(this.message);
    // Data is changed,but not synced to template
    this.message = "SUPERMAN";
  },
  destroyed() {
    // Vue instance is dead,All data is not to reactivity
    // The v-.. directives,custom events is invaild
    console.log("destroyed()");
  },
});

setTimeout(() => {
  app.$destroy();
}, 3000);

app.$mount("#app");

// show reactivity

// The data is no-reactivity

// let message = "Hello!";
// let longMessage = message + "World!";
// console.log(longMessage);
// message = "Hello!!!!";
// console.log(longMessage);

// Use proxy be reactivity

const data = {
  message: "Hello!",
  longMessage: "Hello!World!",
};
const handler = {
  set(target, key, value) {
    if (key === "message") {
      target.longMessage = value + "World!";
    }
  },
};
const proxy = new Proxy(data, handler);
// console.log(proxy.longMessage);
// proxy.message = "Hello!!!";
// console.log(proxy.longMessage);
