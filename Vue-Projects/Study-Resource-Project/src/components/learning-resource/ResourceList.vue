<template>
  <ul>
    <transition-group name="fade" tag="div" class="resource-list-wrapper">
      <resource-item
        v-for="resource in resources"
        :key="resource.id"
        :id="resource.id"
        :title="resource.title"
        :description="resource.description"
        :link="resource.link"
      ></resource-item>
    </transition-group>
  </ul>
</template>

<script>
import ResourceItem from './ResourceItem.vue';

export default {
  components: {
    ResourceItem,
  },
  inject: ['resources'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 800px;
}

/* 确保 transition-group 不破坏布局 */
.resource-list-wrapper {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

/* 过渡效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
