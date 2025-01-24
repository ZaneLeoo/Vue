<template>
  <base-card>
    <div class="button-container">
      <button class="modern-button refresh-button">Refresh</button>
      <router-link class="modern-button register-button" :to="registerPath"
        >Register Coach</router-link
      >
    </div>
    <coach-item
      v-for="coach in coaches"
      :key="coach.id"
      :id="coach.id"
      :name="coach.name"
      :salary="coach.salary"
      :tags="coach.tags"
    >
    </coach-item>
  </base-card>
</template>

<script>
import CoachItem from "./CoachItem.vue";
export default {
  components: {
    CoachItem,
  },
  computed: {
    coaches() {
      return this.$store.getters.coaches;
    },
    registerPath() {
      return "/coaches/register";
    },
  },
};
</script>

<style scoped>
.button-container {
  display: flex; /* 启用 Flexbox 布局 */
  justify-content: space-between; /* 将按钮放在两端 */
  align-items: center; /* 垂直居中对齐 */
  margin-bottom: 20px; /* 按钮下方添加间距 */
  padding: 0 20px; /* 左右内边距，防止按钮贴边 */
}

.modern-button {
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease; /* 添加过渡效果 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影 */
}

.refresh-button {
  background-color: #4caf50; /* 绿色 */
  color: white;
}

.refresh-button:hover {
  background-color: #45a049;
  transform: translateY(-2px); /* 悬停时向上轻微移动 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
}

.register-button {
  background-color: #007bff; /* 蓝色 */
  color: white;
  text-decoration: none;
}

.register-button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
}

/* 如果需要，可以添加响应式样式 */
@media (max-width: 768px) {
  .button-container {
    flex-direction: column; /* 小屏幕垂直排列 */
    align-items: stretch; /* 按钮宽度拉伸 */
    gap: 10px;
  }
}
</style>
