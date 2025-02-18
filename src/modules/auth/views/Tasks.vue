<template>
  <div class="tasks">
    <!-- Sidebar de Categorias -->
    <Sidebar @filterTasks="setCategoryFilter" class="sidebar"/>
    
    <div class="container-tasks">
      <h2>Minhas Tarefas</h2>
      <p>
        Olá <span class="highlight">{{ userName }}</span>, 
        você tem <span class="highlight underline">{{ openTasksCount }} tarefas</span> pendentes.
      </p>
      
      <!-- Passamos a categoria selecionada como prop -->
      <TasksList :selectedCategory="selectedCategory" />
    </div>
  </div>
  <AddTaskButton />
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import TasksList from '../components/organisms/TasksList.vue';
import Sidebar from '../components/organisms/Sidebar.vue';
import AddTaskButton from '../components/molecules/AddTaskButton.vue';

const store = useStore();

// 📌 Estado para armazenar o filtro selecionado
const selectedCategory = ref("all");

// 📌 Função para atualizar o filtro com base no evento emitido pelo Sidebar
const setCategoryFilter = (category) => {
  selectedCategory.value = category;
};

// 📌 Obtém o usuário autenticado a partir do estado global
const user = computed(() => store.state.user.users.find(u => u.email === 'user@facilitaapp.com'));

// 📌 Nome do usuário ou padrão "Usuário"
const userName = computed(() => {
  if (!user.value?.name) return 'Usuário';
  return user.value.name.split(" ").slice(0, 2).join(" ");
});

// 📌 Obtém a contagem de tarefas com status "open"
const openTasksCount = computed(() => {
  return store.state.tasks.tasks.filter(task => task.status === 'open').length;
});
</script>

<style lang="stylus" scoped>
.tasks
  display flex
  flex-direction row
  width 100%
  flex 1
.sidebar
  width 227px /* Largura fixa para a sidebar */
  flex-shrink 0 /* Impede que ela diminua */
  overflow hidden /* Evita que ultrapasse os limites */
.container-tasks

  flex-grow 1 /* Ocupa o espaço restante da tela */
  display flex
  flex-direction column
  justify-content center
  align-items start
  padding 0px 40px 0px 40px
  max-width 800px
  margin 0 auto auto auto
  h2
    font-size 26px
    font-weight bold
    color #283848
    margin-top 120px
  p
    margin-top 2px
    font-size 17px
    font-weight 600
    color #77899e
    margin-bottom 30px
  h2, p
    text-align start

.highlight
  color #2693ff
.underline
  text-decoration underline

@media (max-width: 672px)
  .sidebar
    display none
</style>
