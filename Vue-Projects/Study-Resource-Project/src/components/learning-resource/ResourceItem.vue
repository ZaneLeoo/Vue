<template>
  <li>
    <base-card>
      <header>
        <h3>{{ title }}</h3>
        <base-button mode="flat" @click="this.remove(this.id)"
          >Delete</base-button
        >
      </header>
      <p>{{ description }}</p>
      <nav>
        <a :href="link" target="_blank" class="view-link">View Resource</a>
      </nav>
    </base-card>
  </li>
</template>

<script>
export default {
  props: ['id', 'title', 'description', 'link'],
  inject: ['remove'],
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

p {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

/* 资源链接（带交互） */
.view-link {
  color: #ff7a00;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s ease-in-out;
}

.view-link:hover {
  text-decoration: underline;
  color: #e66a00;
}

.view-link:active {
  transform: scale(0.95);
}
</style>
