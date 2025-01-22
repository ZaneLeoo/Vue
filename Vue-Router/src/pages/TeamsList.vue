<template>
  <ul>
    <router-view></router-view>
    <teams-item
      v-for="team in teams"
      :key="team.id"
      :id="team.id"
      :name="team.name"
      :member-count="team.members.length"
    ></teams-item>
    <button @click="isSaved = true">Save</button>
  </ul>
</template>

<script>
import TeamsItem from '../components/teams/TeamsItem.vue';

export default {
  components: {
    TeamsItem,
  },
  data() {
    return {
      isSaved: false,
    };
  },
  inject: ['teams'],
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave');
    console.log(to, from);
    console.log('haha', this.isSaved);
    if (this.isSaved) {
      next();
    } else {
      const isLeaved = confirm('你还没保存!确定要离开此页面吗?😧');
      next(isLeaved);
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>
