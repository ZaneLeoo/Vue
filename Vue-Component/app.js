const app = new Vue({
  data() {
    return {
      // The loop array shares a control variable
      // Which will cause showDetail or Hide control the entire array item
      detailsAreVisible: false,
      // Of course,we can define more control variables
      // One control variable corresponds to one array item
      // and pass the id in the loop to change a control variable
      // But this will generate a lot of deplicate data and make management difficult
      detailsAreVisibleA: false,
      detailsAreVisibleB: false,
      // The problem is the data independence of array item
      // This is what we need component? but it's just one of reasons
      friends: [
        {
          id: "001",
          name: "Zane Leo",
          phone: "11226",
          email: "zaneleoooooo@gmail.com",
        },
        {
          id: "002",
          name: "Yanzu Peng",
          phone: "1010403",
          email: "yanzupeng@gmail.com",
        },
      ],
    };
  },
  // methods: {
  //   switchDetails() {
  //     this.detailsAreVisible = !this.detailsAreVisible;
  //   },
});

// Here is an example of using a component
// We define a component to solve the above problem
// A component is an independent module that encapsulates HTML,CSS and JavaScript
// It has its own state(data) and logic
// It is a Vue unit that can be reused and nested like a custom tag
Vue.component("friend-concat", {
  template: `
      <ul>
        <li>
          <h2>{{friend.name}}</h2>
          <button @click="switchDetails()">
            {{detailsAreVisible ? 'Hide' : 'Show'}} Details
          </button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
        </li>
        </li>
      </ul>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "001",
        name: "Zane Leo",
        phone: "11226",
        email: "zaneleoooooo@gmail.com",
      },
    };
  },
  methods: {
    switchDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});
app.$mount("#app");
