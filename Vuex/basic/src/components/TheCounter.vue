<template>
  <div>
    <h2>Age: {{ age }}</h2>
    <button @click="add">Add Age</button>
    <h2>The final conter is {{ finalCounter }}</h2>
    <button @click="after">Execute after 2 seconds</button>
  </div>
</template>

<script>
export default {
  computed: {
    age() {
      return this.$store.state.count;
    },
    finalCounter() {
      return this.$store.getters.finalCounter;
    },
  },
  methods: {
    add() {
      this.$store.commit('imcrement', 10);
    },
    after() {
      this.$store.dispatch({
        type: 'after',
        payload: 10,
      });
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}

button {
  width: 200px;
  height: 30px;
}
</style>
