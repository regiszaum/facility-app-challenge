<template>
  <div class="tasks">
    <div class="container-tasks">
      <h2>Minhas Tarefas</h2>
      <p>Olá <span class="highlight">Eduardo Pereira</span>, você tem <span class="highlight underline">4 tarefas</span> pendentes.</p>
      <TasksList />
    </div>
  </div>
</template>

<script setup>
import TasksList from '../components/organisms/TasksList.vue';
</script>

<style lang="stylus" scoped>
.tasks
  margin-top 20px
  display flex
  flex-direction row
  justify-content center
  width 100%
.container-tasks
  display flex
  justify-content center
  flex-direction column
  height 100%
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
</style>
