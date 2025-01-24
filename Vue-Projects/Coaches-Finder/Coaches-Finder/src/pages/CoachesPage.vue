<template>
  <div>
    <the-header></the-header>
    <coach-list></coach-list>
  </div>
</template>

<script>
import TheHeader from "../components/layout/TheHeader.vue";
import CoachList from "../components/coach/CoachList.vue";
export default {
  components: {
    TheHeader,
    CoachList,
  },
};
</script>

<style></style>
