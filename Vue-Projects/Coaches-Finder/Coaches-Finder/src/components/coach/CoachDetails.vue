<template>
  <div>
    <the-header></the-header>
    <base-card>
      <div class="coach-detail">
        <div class="avatar">
          <img :src="coach.image" alt="coach image" />
        </div>
        <h1 class="name">{{ coach.name }}</h1>
        <p class="salary">{{ coach.salary }}</p>
        <div class="tags">
          <span v-for="tag in coach.tags" :key="tag" class="tag">{{
            tag
          }}</span>
        </div>
        <p class="introduction">{{ coach.introduction }}</p>
        <button class="btn contact-btn">Contact</button>
      </div>
    </base-card>
  </div>
</template>

<script>
import TheHeader from "../layout/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
  computed: {
    coach() {
      return this.$store.getters.oneCoach(this.$route.params.coachId);
    },
  },
};
</script>

<style scoped>
.coach-detail {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  text-align: center;
  background: white;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.name {
  font-size: 26px;
  font-weight: bold;
  color: #333;
}

.salary {
  font-size: 18px;
  color: #007bff;
  font-weight: bold;
  margin-bottom: 15px;
}

.tags {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 15px;
}

.tag {
  background-color: #007bff;
  color: white;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.introduction {
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
}

.contact-btn {
  background-color: #22c56e;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.3s ease;
  width: 100%;
}

.contact-btn:hover {
  background-color: #108d40;
}
</style>
