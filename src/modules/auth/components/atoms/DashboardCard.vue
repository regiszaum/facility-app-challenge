<template>
  <div class="task-card" :class="cardClass">
    <h2>{{ title }}</h2>
    <p>{{ taskCount }} tarefas</p>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  title: String,
  count: Number,
  type: String,
});

const cardClass = computed(() => {
  return {
    urgent: props.type === "urgent",
    important: props.type === "important",
    normal: props.type === "normal",
    other: props.type === "other",
  };
});

const taskCount = computed(() => props.count || 0);
</script>

<style lang="stylus" scoped>
.task-card
  background white
  padding 20px
  border-radius 8px
  box-shadow 0 4px 6px rgba(0, 0, 0, 0.1)
  text-align center

.urgent
  border-left 5px solid #dc3545

.important
  border-left 5px solid #ffc107

.normal
  border-left 5px solid #28a745

.other
  border-left 5px solid #d3e5ff
</style>
