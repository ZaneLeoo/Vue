<template>
  <div>
    <div v-if="isLogin">
      <base-container title="Vuex"></base-container>
      <the-counter></the-counter>
    </div>
    <users-auth></users-auth>
  </div>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import UsersAuth from './components/UsersAuth.vue';

export default {
  components: {
    TheCounter,
    BaseContainer,
    UsersAuth,
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
