<template>
  <div>
    <div class="container">
      <div class="block" :class="{ animate: animated }"></div>
      <button @click="becomeAnimation">Animate</button>
    </div>
    <base-modal @close="hideDialog" :open="dialogIsVisible">
      <p>This is a test dialog!</p>
      <button @click="hideDialog">Close it!</button>
    </base-modal>
    <div class="container">
      <button @click="showDialog">Show Dialog</button>
    </div>
    <div class="container">
      <number-list></number-list>
    </div>
  </div>
</template>

<script>
import NumberList from './components/NumberList.vue';
export default {
  components: { NumberList },
  data() {
    return {
      dialogIsVisible: false,
      animated: false,
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    becomeAnimation() {
      this.animated = true;
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.5s; */
}
.animate {
  animation: slide 0.5s ease-out;
}

.dialog-enter-active {
  animation: slide 0.5s ease-out;
}

@keyframes slide {
  0% {
    opacity: 0;
    transform: translateX(-140px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
</style>
