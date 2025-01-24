<template>
  <div>
    <base-card>
      <h2>Send a Message</h2>
      <form @submit.prevent="sendMessage" class="contact-form">
        <div class="form-control">
          <label for="name">Your Name</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>
        <div class="form-control">
          <label for="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            v-model="formData.message"
            required
          ></textarea>
        </div>
        <div class="actions">
          <button type="submit" class="send-button">Send</button>
        </div>
      </form>
    </base-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      formData: {
        name: "",
        message: "",
      },
    };
  },
  methods: {
    sendMessage() {
      this.formData = {
        name: "",
        message: "",
      };
    },
  },
};
</script>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column; /* 垂直排列表单元素 */
}

.form-control {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
  color: #333;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 16px;
  font-family: sans-serif; /* 统一字体 */
}

textarea {
  resize: vertical;
}

.actions {
  text-align: right; /* 按钮靠右对齐 */
  margin-top: 15px;
}

.send-button {
  background-color: #007bff; /* 蓝色 */
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.send-button:hover {
  background-color: #0056b3;
}

/* 响应式设计（可选） */
@media (max-width: 400px) {
  .contact-card {
    padding: 15px;
  }
}
</style>
