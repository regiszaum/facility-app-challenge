<template>
  <div class="tasks-component">
    <SearchInput class="search-component" v-model="searchTerm" />
    
    <div class="task-list">
      <div 
        v-for="task in filteredTasks" 
        :key="task.id" 
        class="task" 
        :class="{ completed: task.status === 'closed' }">
        
        <input type="checkbox" :checked="task.status === 'closed'" @change="toggleTaskStatus(task.id)" />

        <span class="task-title">{{ task.title }}</span>

        <span class="tag" :class="task.tag">{{ formatTag(task.tag) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import SearchInput from '../molecules/SearchInput.vue';

const props = defineProps({
  selectedCategory: String // 📌 Filtro recebido da View Tasks.vue
});

const store = useStore();
const searchTerm = ref('');

// 📌 Obtém todas as tarefas do Vuex Store
const tasks = computed(() => store.state.tasks?.tasks ?? []);

// 📌 Ordena por prioridade: Urgent → Important → Other
const sortByPriority = (tasksList) => {
  const priorityOrder = { urgent: 1, important: 2, other: 3 };
  return tasksList.sort((a, b) => priorityOrder[a.tag] - priorityOrder[b.tag]);
};

// 📌 Filtra tarefas por título, descrição e categoria selecionada
const filteredTasks = computed(() => {
  if (!tasks.value.length) return [];

  // Filtra por busca
  let filtered = tasks.value.filter(task => {
    const search = searchTerm.value.toLowerCase();
    return task.title.toLowerCase().includes(search) || task.description.toLowerCase().includes(search);
  });

  // 📌 Aplica filtro de categoria
  if (props.selectedCategory !== "all") {
    filtered = filtered.filter(task =>
      props.selectedCategory === "closed"
        ? task.status === "closed"
        : task.tag === props.selectedCategory
    );
  }

  // Retorna ordenado por prioridade
  return sortByPriority(filtered);
});

// 📌 Alternar status da tarefa
const toggleTaskStatus = (taskId) => {
  store.dispatch('tasks/toggleTaskStatus', taskId);
};

// 📌 Formatar tag de prioridade
const formatTag = (tag) => {
  const tags = { urgent: 'Urgente', important: 'Importante', other: 'Outras' };
  return tags[tag] || 'Outras';
};
</script>


<style lang="stylus" scoped>
.tasks-component
  width 100%

.search-component
  margin-bottom 30px

.task-list
  display flex
  flex-direction column
  gap 7px
  max-height 400px
  overflow-y auto
  width 100%

.task
  display flex
  align-items center
  background white
  padding 14.5px 14px 14.5px 14px
  border-radius 8px
  justify-content space-between
  cursor pointer
  border 1px solid #e0e0e0
  transition all 0.3s ease
  position relative
  height 64px
  color #304458

  &:hover
    box-shadow 0px 4px 10px rgba(0, 0, 0, 0.1)

  &.completed .task-title
    text-decoration line-through
    color #8D9CAA

.task-title
  flex-grow 1
  font-size 16px
  font-weight 500
  margin-left 10px
  color #283848

input[type="checkbox"]
  width 32px
  height 32px
  appearance none
  border 2px solid #ccc
  border-radius 4px
  cursor pointer
  display flex
  align-items center
  justify-content center
  transition background 0.3s ease-in-out

  &:checked
    background-color #0ed984
    border-color #0ed984
    position relative
    &::after
      content '✔'
      font-size 12px
      color white
      font-weight bold
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)

.tag
  padding 4px 10px
  border-radius 12px
  font-size 11px
  font-weight bold
  white-space nowrap

  &.urgent
    background #ff2e79
    color #fff

  &.important
    background #ffc42e
    color #fff

  &.other
    background #d3e5ff
    color #0056b3

// Estilização do menu de ações ⋮
.actions
  position relative

.menu-button
  background none
  border none
  font-size 20px
  cursor pointer
  padding 5px
  color #666

  &:hover
    color #000

.dropdown-menu
  position absolute
  top 0px
  right 0
  background white
  border 1px solid #ddd
  border-radius 5px
  box-shadow 0px 4px 8px rgba(0, 0, 0, 0.1)
  padding 5px 0
  min-width 120px
  display flex
  flex-direction column
  z-index 10

  button
    padding 8px 10px
    width 100%
    text-align left
    border none
    background none
    cursor pointer
    font-size 14px
    color #333

    &:hover
      background #f5f5f5

  .edit
    color #28a745

  .delete
    color #007bff
</style>
