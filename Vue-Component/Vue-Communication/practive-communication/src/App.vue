<template>
  <div class="app-container">
    <active-user :username="user.name" :userage="user.age"></active-user>
    <user-data @set-user="setUser" class="form"></user-data>
  </div>
</template>

<script>
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";
export default {
  components: {
    ActiveUser,
    UserData,
  },
  data() {
    return {
      user: {
        name: "",
        age: "",
      },
    };
  },
  methods: {
    setUser(name, age) {
      const user = {
        name: name,
        age: parseInt(age),
      };
      this.user = user;
    },
  },
};
</script>

<style scoped>
/* 主容器，垂直方向排列，居中对齐 */
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f7f7f7; /* 浅灰背景 */
  min-height: 100vh;
}

/* 表单组件 */
.form {
  width: 100%;
  max-width: 400px; /* 限制表单宽度 */
  margin-bottom: 30px; /* 表单与用户列表之间的间距 */
}
</style>
