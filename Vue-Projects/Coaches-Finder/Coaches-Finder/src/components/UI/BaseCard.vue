<template>
  <div class="base-card">
    <slot></slot>
  </div>
</template>

<style scoped>
.base-card {
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* 轻微阴影 */
  border: 1px solid #ddd; /* 轻微边框 */
  max-width: 650px; /* 限制最大宽度 */
  margin: 20px auto; /* 居中显示 */
}
</style>
