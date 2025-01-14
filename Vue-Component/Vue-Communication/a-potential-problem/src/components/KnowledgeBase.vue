<template>
  <section>
    <h2>Select a Topic</h2>
    <!-- <knowledge-grid
      :topics="topics"
      @select-topic="$emit('select-topic', $event)"
    ></knowledge-grid> -->
    <knowledge-grid></knowledge-grid>
  </section>
</template>

<script>
import KnowledgeGrid from './KnowledgeGrid.vue';
// In this component,no data is actually needed,like topics[]
// However,because its child need it,but its child cannot directly
// get the data of the upper parent component,so the transition
// of this component is needed

// For this situation,we can use Provide & Inject to solve it

// Now,the data passing relationship is
// App -> KnowledgeBase -> KnowledgeGrid

// The child component emit event relationship is
// KnowledgeElement -> KnowledgeGird -> KnowledgeBase -> App
export default {
  components: { KnowledgeGrid },
  props: ['topics'],
  emits: ['select-topic'],
};
</script>
