<template>
  <div class="tasks">
    <div class="container-tasks">
      <h2>Minhas Tarefas</h2>
      <p>Olá <span class="highlight">Eduardo Pereira</span>, você tem <span class="highlight underline">4 tarefas</span> pendentes.</p>
      <div class="search-box">
        <input type="text" placeholder="Buscar Tarefas" />
      </div>
      <div class="task-list">
        <div class="task completed">
          <input type="checkbox" checked />
          <span>Planejar desenvolvimento do app TodoList</span>
          <span class="tag urgent">Urgente</span>
        </div>
        <div class="task">
          <input type="checkbox" />
          <span>Criar projeto Vue.js</span>
          <span class="tag important">Importante</span>
        </div>
        <div class="task">
          <input type="checkbox" />
          <span>Montar telas HTML/CSS</span>
          <span class="tag important">Importante</span>
        </div>
        <div class="task">
          <input type="checkbox" />
          <span>Separar componentes</span>
        </div>
        <div class="task">
          <input type="checkbox" />
          <span>Programar componentes</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
  h2, p
    text-align start

.search-box
  display flex
  align-items center
  background white
  padding 8px
  border-radius 4px
  margin 30px 0 30px 0
.highlight
  color #2693ff
.underline
  text-decoration underline

  input
    border none
    outline none
    flex 1

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
