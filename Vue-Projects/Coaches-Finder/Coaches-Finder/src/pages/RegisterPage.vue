<template>
  <div>
    <the-header></the-header>
    <base-card>
      <h2>Register as a Coach</h2>
      <form @submit.prevent="registerCoach">
        <div class="form-control">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>
        <div class="form-control">
          <label for="salary">Hourly Rate</label>
          <input type="number" id="salary" v-model="formData.salary" required />
        </div>
        <div class="form-control">
          <label for="tags">Specialties (comma-separated)</label>
          <input type="text" id="tags" v-model="formData.tags" required />
        </div>
        <div class="form-control">
          <label for="introduction">Introduction</label>
          <textarea
            id="introduction"
            rows="5"
            v-model="formData.introduction"
            required
          ></textarea>
        </div>
        <div class="actions">
          <button type="submit" class="modern-button register-button">
            Register
          </button>
        </div>
      </form>
    </base-card>
  </div>
</template>

<script>
import TheHeader from "../components/layout/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
  data() {
    return {
      formData: {
        name: "",
        salary: null,
        tags: "",
        introduction: "",
      },
    };
  },
  methods: {
    registerCoach() {
      this.$store.dispatch("addCoach", this.formData);
      alert("Register Successful!!😎");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.form-control {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box; /* 包含 padding 和 border */
}

textarea {
  resize: vertical; /* 允许垂直方向调整大小 */
}

.actions {
  text-align: center; /* 按钮居中 */
}

.modern-button {
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.register-button {
  background-color: #007bff;
  color: white;
}

.register-button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
}
</style>
