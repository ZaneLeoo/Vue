<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="switchDetail">
      {{ detailAreVisiable ? "Hide" : "Show" }} Detail
    </button>
    <ul v-if="detailAreVisiable">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
// In the component,the data is independent and does not affect each other
// so the detailAreVisiable varible will not control all the detail switches.
// Also,components allow code reuse and split projects to make them clear!
// But there,the data is fixed,not matter how many component tags we write
// so the component is only reusable at this time.
// To make the component powerful,we need to make it configurable
// That is the next knowledge point,Component Communication.
export default {
  data() {
    return {
      detailAreVisiable: false,
      friend: {
        id: "001",
        name: "Zane Leo",
        phone: "001100",
        email: "zaneleoooooo@gmail.com",
      },
    };
  },
  methods: {
    switchDetail() {
      this.detailAreVisiable = !this.detailAreVisiable;
    },
  },
};
</script>

<style></style>
