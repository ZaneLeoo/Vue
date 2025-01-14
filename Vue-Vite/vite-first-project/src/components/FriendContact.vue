<template>
  <li>
    <h2>{{ name }}{{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">toggleFavorite</button>
    <button @click="switchDetail">
      {{ detailAreVisiable ? "Hide" : "Show" }} Detail
    </button>
    <ul v-if="detailAreVisiable">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
/**
 001
 Here we will solve the problem of hard-coding component data in src-first.
 We will use the props attribute to communicate between parent and child components
 making our components configurable,That will make the components more powerful!
 
 002
 Now we can pass data from parent to child,but if the child component wants to
 change the data only by saving local variables or using computed,this will not be
 synchronized to the parent component's data
 So we need the $emit method,which is a build-in method,that can emit an event.
 The parent component responds to the child component;s request by listening to this
 event,threrby changing the data
 */

export default {
  props: ["id", "name", "phoneNumber", "emailAddress", "isFavorite"],
  data() {
    return {
      detailAreVisiable: false,
    };
  },
  methods: {
    switchDetail() {
      this.detailAreVisiable = !this.detailAreVisiable;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>

<style></style>
