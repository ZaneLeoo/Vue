<template>
  <section class="user-display">
    <ul class="user-info">
      <li><strong>User Name:</strong> {{ username }}</li>
      <li><strong>User Age:</strong> {{ userage }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
    userage: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Flexbox container to center content */
.user-display {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 400px;
  background-color: #f7f7f7;
  font-family: "Arial", sans-serif;
}

/* User info card */
.user-info {
  background-color: #fff; /* White background */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;
  list-style: none;
  text-align: left;
  font-size: 14px;
}

.user-info li {
  margin-bottom: 10px;
  color: #333;
}

.user-info strong {
  color: #555;
}
</style>
