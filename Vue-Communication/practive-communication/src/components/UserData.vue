<template>
  <div class="form-container">
    <form @submit.prevent="setUser" class="user-form">
      <h3>Set User Data</h3>
      <div class="form-group">
        <label>Username: </label>
        <input type="text" v-model="username" placeholder="Your Name" />
      </div>
      <div class="form-group">
        <label>Age: </label>
        <input type="text" v-model="userage" placeholder="Your Age" />
      </div>
      <button type="submit" class="submit-button">Set</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      userage: "",
    };
  },
  methods: {
    setUser() {
      this.$emit("set-user", this.username, this.userage);
    },
  },
};
</script>

<style scoped>
/* Flexbox container to center the form */
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 20vh;
  background-color: #f7f7f7; /* Soft light gray */
  font-family: "Arial", sans-serif;
}

/* Form styles */
.user-form {
  background-color: #ffffff; /* White background */
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.user-form h3 {
  margin-bottom: 20px;
  color: #333; /* Neutral dark color */
  text-align: center;
}

/* Input field styles */
.form-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 5px;
  font-size: 14px;
  color: #666;
}

.form-group input {
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

/* Button styles */
.submit-button {
  width: 100%;
  padding: 10px;
  background-color: #333; /* Neutral black */
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #555; /* Slightly lighter black */
}
</style>
