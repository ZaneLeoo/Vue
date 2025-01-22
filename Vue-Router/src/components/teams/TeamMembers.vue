<template>
  <section>
    <router-view :currentTeam="$route.params.teamId"></router-view>
    <h2>{{ teamName }} ,The mood is {{ $route.query.mood }}🙂</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2?mood=happy">Go to Team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['teams', 'users'],
  components: {
    UserItem,
  },
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  methods: {
    loadMembersData() {
      const teamId = this.$route.params.teamId;
      const selectedTeam = this.teams.find((team) => team.id === teamId);
      const selectedMembers = [];
      for (const member of selectedTeam.members) {
        const selectedMember = this.users.find((user) => user.id === member);
        selectedMembers.push(selectedMember);
      }
      this.teamName = selectedTeam.name;
      this.members = selectedMembers;
    },
  },
  watch: {
    // 由于routing同一组件的不同参数路径时，Vue不会进行destroy and rebuild
    // 因此 life cycle hook 将不会调用，数据不会更新，因此我们可以通过 watch $route
    // 的方式来达到即使切换同一路径的不同参数也可以达到数据变化的效果
    $route() {
      this.loadMembersData();
    },
  },
  created() {
    this.loadMembersData();
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
