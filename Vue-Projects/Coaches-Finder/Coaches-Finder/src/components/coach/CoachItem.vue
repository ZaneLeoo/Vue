<template>
  <base-card class="coach-card">
    <h2 class="coach-name">{{ name }}</h2>
    <p class="coach-salary">{{ salary }}</p>
    <div class="tags">
      <span v-for="tag in tags" :key="tag" class="tag">
        {{ tag }}
      </span>
    </div>
    <div class="buttons">
      <router-link class="btn primary" :to="detailsPath">Contact</router-link>
      <router-link class="btn primary" :to="detailsPath"
        >View Details</router-link
      >
    </div>
  </base-card>
</template>

<script>
export default {
  props: ["id", "name", "salary", "tags"],
  computed: {
    detailsPath() {
      return "/coaches/details/" + this.id;
    },
  },
};
</script>

<style scoped>
.coach-card {
  text-align: center;
}

.coach-name {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.coach-salary {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
}

.tags {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 15px;
}

.tag {
  background-color: #2b68af;
  color: white;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}
.buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

.buttons a {
  text-decoration: none;
  color: black;
}

.btn {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 15px;
  font-weight: bold;
  background-color: #dfe2e3;
}
.btn:hover {
  background-color: #67d04d;
}
</style>
