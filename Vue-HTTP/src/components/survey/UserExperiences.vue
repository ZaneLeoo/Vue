<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="getData">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading....</p>
      <p v-else-if="!isLoading && results.length === 0">No data here!😐</p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
import axios from 'axios';
export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      isLoading: true,
      results: [],
    };
  },
  methods: {
    getData() {
      axios.get('http://localhost:8080/api/get').then((response) => {
        this.isLoading = false;
        this.results = response.data;
      });
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
