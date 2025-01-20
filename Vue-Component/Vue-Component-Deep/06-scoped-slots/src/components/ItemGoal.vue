<template>
  <div>
    <course-goals v-slot="props">
      <h2>The gola is{{ props.item }}</h2>
      <h2>Someting -> {{ props.another - prop }}</h2>
    </course-goals>
  </div>
</template>

<script>
import CourseGoals from "./CourseGoals.vue";
export default {
  components: {
    CourseGoals,
  },
};
</script>

<style></style>
