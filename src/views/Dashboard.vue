<template>
    <div class="dashboard-container">
      <aside class="sidebar">
        <div class="logo">
          <img src="@/assets/svg/logo.svg" alt="FacilitaTasks Logo" />
        </div>
        <nav>
          <ul>
            <li><font-awesome-icon icon="chart-bar" /> Dashboard</li>
            <li><font-awesome-icon icon="list-check" /> Tarefas</li>
            <li><font-awesome-icon icon="cog" /> Configurações</li>
          </ul>
        </nav>
      </aside>
      <main class="content">
        <header class="topbar">
          <div class="user-info">
            <img src="@/assets/svg/logo.svg" alt="Usuário" class="avatar" />
            <div>
              <p class="username">Eduardo Pereira da Costa</p>
              <span class="role">Front-end Developer</span>
            </div>
          </div>
        </header>
        <section class="tasks">
          <h2>Minhas Tarefas</h2>
          <p>Olá <span class="highlight">Eduardo Pereira</span>, você tem <span class="highlight">4 tarefas</span> pendentes.</p>
          <div class="search-box">
            <input type="text" placeholder="Buscar Tarefas" />
            <IconComponent name="gear" />
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
        </section>
      </main>
      <button class="floating-action-button">+</button>
    </div>
</template>
  
<script>
import IconComponent from '@/components/atoms/IconComponent.vue';
  export default {
    data() {
      return {
        searchQuery: '',
      };
    },
    components: {
      IconComponent
    }
  };
</script>
  
<style lang="stylus" scoped>
  .dashboard-container
    display flex
    height 100vh
  
  .sidebar
    width 200px
    background #007bff
    color white
    display flex
    flex-direction column
    align-items center
    padding 20px
  
    .logo img
      width 80px
  
    nav ul
      list-style none
      padding 0
      margin-top 20px
  
    nav li
      display flex
      align-items center
      gap 10px
      margin 15px 0
      cursor pointer
  
  .content
    flex 1
    background #f0f8ff
    padding 20px
  
  .topbar
    display flex
    justify-content flex-end
    align-items center
    padding 10px
    background white
    border-bottom 1px solid #ddd
  
  .user-info
    display flex
    align-items center
    gap 10px
  
  .avatar
    width 40px
    height 40px
    border-radius 50%
  
  .tasks
    margin-top 20px
  
  .search-box
    display flex
    align-items center
    background white
    padding 8px
    border-radius 4px
    margin-bottom 20px
  
    input
      border none
      outline none
      flex 1
  
  .task-list
    display flex
    flex-direction column
    gap 10px
  
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
  
  .floating-action-button
    position fixed
    bottom 20px
    right 20px
    background #28a745
    color white
    border none
    width 50px
    height 50px
    border-radius 50%
    font-size 24px
    cursor pointer
  </style>
  