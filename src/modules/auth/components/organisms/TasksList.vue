<template>
  <div>
    <SearchInput class="search-component" v-model="searchTerm" />
    <div class="task-list">
      <div 
        v-for="task in filteredTasks" 
        :key="task.id" 
        class="task" 
        :class="{ completed: task.status === 'closed' }">
        <input type="checkbox" :checked="task.status === 'closed'" @change="toggleTaskStatus(task.id)" />
        <span>{{ task.title }}</span>
        <span class="tag" :class="task.tag">{{ formatTag(task.tag) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import SearchInput from '../molecules/SearchInput.vue';
const store = useStore();
const searchTerm = ref('');

const tasks = computed(() => store.state.tasksStore?.tasks || []);

const filteredTasks = computed(() => {
  return tasks.value?.length > 0
    ? tasks.value.filter(task => task.title.toLowerCase().includes(searchTerm.value.toLowerCase()))
    : [];
});

const toggleTaskStatus = (taskId) => {
  store.dispatch('toggleTaskStatus', taskId);
};

const formatTag = (tag) => {
  const tags = { urgent: 'Urgente', important: 'Importante', other: 'Outras' };
  return tags[tag] || 'Outras';
};
</script>

<style lang="stylus" scoped>
.search-component
  margin-bottom 30px

.task-list
  display flex
  flex-direction column
  justify-content center

.task
  display flex
  align-items center
  background white
  padding 10px
  border-radius 4px
  justify-content space-between
  cursor pointer

  &.completed span
    text-decoration line-through
    color gray

.tag
  padding 4px 8px
  border-radius 12px
  font-size 12px

  &.urgent
    background pink

  &.important
    background gold
</style>