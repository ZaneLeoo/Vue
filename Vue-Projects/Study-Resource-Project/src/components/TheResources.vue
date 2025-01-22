<template>
  <div>
    <base-card class="layout">
      <base-button @click="active = 'resource-list'" :mode="resourceListMode"
        >Resource List</base-button
      >
      <base-button @click="active = 'add-resource'" :mode="addResourceMode"
        >Add Resource</base-button
      >
    </base-card>
    <keep-alive> <component :is="active"></component> </keep-alive>
  </div>
</template>

<script>
import ResourceList from './learning-resource/ResourceList.vue';
import AddResource from './learning-resource/AddResource.vue';

export default {
  components: {
    ResourceList,
    AddResource,
  },
  data() {
    return {
      active: 'resource-list',
      resources: [
        {
          id: '001',
          title: 'Vue official',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org',
        },
      ],
    };
  },
  computed: {
    resourceListMode() {
      return this.active === 'resource-list' ? null : 'flat';
    },
    addResourceMode() {
      return this.active === 'add-resource' ? null : 'flat';
    },
  },
  methods: {
    remove(resourceId) {
      // !!! 如果我提供了这个方法,并且这样去删除元素,Vue将不会检测到变化
      // !!! 因为Vue会检测我们一开始的数据引用,如果更改则响应式会无效
      // this.resources = this.resources.filter(
      //   (resource) => resource.id != resourceId
      // );
      const index = this.resources.findIndex(
        (resource) => resource.id === resourceId
      );
      this.resources.splice(index, 1);
    },
    add(title, description, link) {
      const resource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: link,
      };
      this.resources.unshift(resource);
      this.active = 'resource-list';
    },
  },
  provide() {
    return {
      resources: this.resources,
      remove: this.remove,
      add: this.add,
    };
  },
};
</script>
<style scoped>
.layout {
  display: flex;
  gap: 10px;
  justify-items: center;
}
</style>
