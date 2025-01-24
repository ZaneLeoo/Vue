<template>
  <header class="nav-header">
    <router-link class="logo" to="/">Coaches Finder</router-link>
    <nav>
      <router-link class="nav-button" to="/">All Coaches</router-link>
      <button class="nav-button">Requests</button>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #ffffff; /* 纯白背景 */
}

.logo {
  font-size: 22px;
  font-weight: bold;
  color: #333; /* 深色字体 */
  text-decoration: none;
}

nav {
  display: flex;
  gap: 15px;
}

.nav-button {
  background-color: #f9faf8;
  color: rgb(14, 12, 12);
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  text-decoration: none;
  border: 2px solid #101010; /* 轻微分隔线 */
}

.nav-button:hover {
  background-color: #67d04d;
}
</style>
