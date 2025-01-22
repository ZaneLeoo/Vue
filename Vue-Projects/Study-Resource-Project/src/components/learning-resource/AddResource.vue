<template>
  <base-card>
    <form class="resource-form" @submit.prevent="addResource">
      <div class="form-group">
        <label for="title">Title</label>
        <input id="title" type="text" v-model="title" required />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea id="description" v-model="description" required></textarea>
      </div>
      <div class="form-group">
        <label for="link">Link</label>
        <input id="link" type="text" v-model="link" required />
      </div>
      <base-button type="submit">Add Resource</base-button>
    </form></base-card
  >
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      link: '',
    };
  },
  inject: ['add'],
  methods: {
    addResource() {
      this.add(this.title, this.description, this.link);
      this.title = '';
      this.description = '';
      this.link = '';
    },
  },
};
</script>

<style scoped>
/* 表单整体样式 */
.resource-form {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  min-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* 输入框和标签 */
.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

textarea {
  resize: vertical;
  min-height: 80px;
}

/* 提交按钮 */
button {
  width: 100%;
  padding: 10px;
  background: #5a1a87;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

/* 按钮悬停和点击效果 */
button:hover {
  background: #3e125c;
}

button:active {
  transform: scale(0.95);
}

/* 禁用按钮样式 */
button:disabled {
  background: #ccc;
  cursor: not-allowed;
}
</style>
