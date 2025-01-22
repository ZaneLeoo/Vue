<template>
  <div>
    <p>
      <button
        type="button"
        :value="modelValue"
        @click="change('happy')"
        :class="{ selected: modelValue === 'happy' }"
      >
        Happy
      </button>
    </p>
    <p>
      <button
        type="button"
        :value="modelValue"
        @click="change('sad')"
        :class="{ selected: modelValue === 'sad' }"
      >
        Sad
      </button>
    </p>
    <p>
      <button
        type="button"
        :value="modelValue"
        @click="change('angry')"
        :class="{ selected: modelValue === 'angry' }"
      >
        Angry
      </button>
    </p>
  </div>
</template>

<script>
export default {
  props: ['modelValue'],
  methods: {
    change(value) {
      this.$emit('update:modelValue', value);
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
}
.button-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  font-family: 'Arial', sans-serif;
}

button {
  padding: 10px 20px;
  border: 2px solid #ccc;
  background-color: transparent;
  border-radius: 30px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
}

button:hover {
  border-color: #ddd;
  background-color: #f0f0f0;
}

button.selected {
  border-color: #1b889b; /* INS风格的颜色：粉色 */
  background-color: #1b889b;
  color: white;
}
</style>
