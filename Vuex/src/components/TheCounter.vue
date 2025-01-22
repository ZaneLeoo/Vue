<template>
  <div>
    <h2>Age: {{ age }}</h2>
    <button @click="add">Add Age</button>
  </div>
</template>

<script>
export default {
  computed: {
    age() {
      return this.$store.state.count;
    },
  },
  methods: {
    add() {
      this.$store.commit('imcrement');
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
  width: 100px;
  height: 20px;
}
</style>
