<template>
  <div class="not-found">
    <h2>
      Sorry! 🥹 The page was not found! Maybe go to
      <router-link to="/teams">TeamsList</router-link>?
    </h2>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
  text-align: center;
  font-family: 'Arial', sans-serif;
}
</style>
