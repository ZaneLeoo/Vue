<template>
  <div>
    <app-header></app-header>
    <the-resources></the-resources>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import TheResources from './components/TheResources.vue';
export default {
  components: {
    AppHeader,
    TheResources,
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
