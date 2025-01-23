<template>
  <div>
    <button @click="login" v-if="!isLogin">Login</button>
    <button @click="logout" v-if="isLogin">Logout</button>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex';
export default {
  //   ...mapMutations(['login', 'logout']),
  methods: {
    login() {
      this.$store.commit('login');
    },
    logout() {
      this.$store.commit('logout');
    },
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
  },
};
</script>

<style scoped>
div {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
</style>
