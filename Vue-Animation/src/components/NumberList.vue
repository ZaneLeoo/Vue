<template>
  <div>
    <button @click="add">Add Number</button>
    <button @click="remove">Delete Number</button>
    <button @click="sort">Sorting</button>
    <transition-group tag="ul" name="number-list">
      <li v-for="number in numbers" :key="number">
        {{ number }}
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [2, 8, 4, 6, 11],
    };
  },
  methods: {
    add() {
      const randomNumber = Math.floor(Math.random() * 20);
      const randomIndex = Math.floor(Math.random() * (this.numbers.length + 1));
      this.numbers.splice(randomIndex, 0, randomNumber);
    },
    remove() {
      if (this.numbers.length > 0) {
        const randomIndex = Math.floor(Math.random() * this.numbers.length);
        this.numbers.splice(randomIndex, 1);
      }
    },
    sort() {
      const sortedNumbers = [...this.numbers].sort((n1, n2) => n1 - n2);
      this.numbers.splice(0, this.numbers.length, ...sortedNumbers);
    },
  },
};
</script>

<style scoped>
.number-list-enter-active,
.number-list-leave-active,
.number-list-move {
  transition: transform 0.7s ease-out;
}

.number-list-enter-from,
.number-list-leave-to {
  transform: translateX(30px);
}

.number-list-enter-to,
.number-list-leave-from {
  transform: translateX(0);
}
</style>
