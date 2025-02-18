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

        <!-- Verifica se a tag existe antes de formatar -->
        <span v-if="task.tag" class="tag" :class="task.tag">{{ formatTag(task.tag) }}</span>

        <!-- Botão de ações e dropdown -->
        <div class="actions">
          <button @click.stop="toggleMenu(task)" class="menu-button">
            <IconComponent name="ellipsis-vertical" :type="'fas'" height="15px" width="3.2px" color="#5ECDA5"/>
          </button>

          <div v-if="task.showMenu" class="dropdown-menu" @click.stop>
            <!-- Linha com botão de fechar e editar -->
            <div class="menu-header">
              <button class="edit" @click="editTask(task)">
                <IconComponent name="circle" :type="'fas'" height="9px" width="9px" color="#5ECDA5"/>
                <span>Editar</span>
              </button>
              <button @click.stop="toggleMenu(task)" class="menu-close">
                <IconComponent name="ellipsis-vertical" :type="'fas'" height="15px" width="3.2px" color="#2693ff"/>
              </button>
            </div>

            <!-- Botão de excluir abaixo -->
            <button class="delete" @click="openDeleteTaskModal(task.id, task.title)">
              <IconComponent name="circle" :type="'fas'" height="9px" width="9px" color="#D6E6EF"/>
              <span>Excluir</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DeleteTaskModal ref="deleteTaskModalRef" />
  <EditTaskModal ref="editTaskModalRef" />
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import SearchInput from '../molecules/SearchInput.vue';
import IconComponent from '@/components/atoms/IconComponent.vue';
import DeleteTaskModal from '../modals/DeleteTaskModal.vue';
import EditTaskModal from '../modals/EditTaskModal.vue';

const props = defineProps({
  selectedCategory: String
});

const store = useStore();
const searchTerm = ref('');
const editTaskModalRef = ref(null);
const deleteTaskModalRef = ref(null);

// 📌 Abrir modal de edição
const editTask = (task) => {
  editTaskModalRef.value.open(task);
};

// 📌 Abre a modal de exclusão com os dados da tarefa
const openDeleteTaskModal = (taskId, taskTitle) => {
  console.log('abriu');
  console.log(taskId, taskTitle);
  deleteTaskModalRef.value.open(taskId, taskTitle);
};


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

  let filtered = tasks.value.filter(task => {
    const search = searchTerm.value.toLowerCase();
    return task.title.toLowerCase().includes(search) || task.description.toLowerCase().includes(search);
  });

  if (props.selectedCategory !== "all") {
    filtered = filtered.filter(task =>
      props.selectedCategory === "closed"
        ? task.status === "closed"
        : task.tag === props.selectedCategory
    );
  }

  return sortByPriority(filtered);
});

// 📌 Alternar status da tarefa
const toggleTaskStatus = (taskId) => {
  store.dispatch('tasks/toggleTaskStatus', taskId);
};

// 📌 Exibir menu de ações individuais para cada tarefa
const toggleMenu = (task) => {
  task.showMenu = !task.showMenu;
};

// 📌 Função para formatar a tag de prioridade
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
  max-height 380px
  overflow-y auto
  width 100%

.task
  display flex
  align-items center
  background white
  padding 14.5px 14px
  border-radius 8px
  justify-content space-between
  cursor pointer
  border 1px solid #e0e0e0
  transition all 0.3s ease
  position relative
  height 64px
  color #304458

  &:hover
    box-shadow 0px 4px 0px rgba(0, 0, 0, 0.1)

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

// 📌 Estilização do menu de ações ⋮
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
  top -9px /* Garante que fique abaixo do botão */
  right 0
  background white
  border 1px solid #ddd
  border-radius 5px
  box-shadow 0px 4px 8px rgba(0, 0, 0, 0.1)
  padding 5px 0
  min-width 140px
  display flex
  flex-direction column
  align-items flex-start
  z-index 10

  /* Botão de fechar e botão "Editar" na mesma linha */
  .menu-header
    display flex
    align-items center
    width 100%
    justify-content space-between

.menu-close
  background none
  border none
  cursor pointer
  padding 5px
  display flex
  align-items center
  justify-content end
  font-size 14px
  font-weight bold
  color #2693ff
  transition color 0.2s ease

  &:hover
    color #2693ff

/* Botões do menu */
button
  display flex
  align-items center
  gap 8px
  padding 8px 10px
  width 100%
  text-align left
  border none
  background none
  cursor pointer
  font-size 14px
  color #333
  transition background 0.2s ease

.edit
  color #28a745

.delete
  color #748ca5
</style>
