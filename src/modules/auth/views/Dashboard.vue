<template>
  <div class="dashboard-container">
    <aside class="sidebar">
      <div class="logo">
        <img src="@/assets/svg/logo.svg" alt="FacilitaTasks Logo" />
      </div>
      <nav>
        <ul>
          <li><IconComponent name="chart-column" :height="'30px'"/>Dashboard</li>
          <li><IconComponent name="circle-check" :type="'far'" :height="'30px'"/>Tarefas</li>
          <li><IconComponent name="gear" :height="'30px'"/>Configurações</li>
          <li @click="logout"><IconComponent name="right-from-bracket" :height="'30px'" />Sair</li>
        </ul>
      </nav>
      <div></div>
    </aside>
    <main class="content">
      <header class="topbar">
        <div class="user-info">
          <img src="@/assets/png/profile.png" alt="Usuário" class="avatar" />
          <div>
            <p class="username">Eduardo Pereira da Costa</p>
            <span class="role">Front-end Developer</span>
          </div>
        </div>
      </header>
      <section class="tasks">
        <div class="container-tasks">
        <h2>Minhas Tarefas</h2>
        <p>Olá <span class="highlight">Eduardo Pereira</span>, você tem <span class="highlight">4 tarefas</span> pendentes.</p>
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
      </section>
    </main>
    <button class="floating-action-button">+</button>
  </div>
</template>

<script setup>
import IconComponent from '@/components/atoms/IconComponent.vue';
import { useStore } from 'vuex'; // Importe o useStore do Vuex
import { useRouter } from 'vue-router'; // Importe o useRouter para redirecionar após o logout

// Acesse o store do Vuex
const store = useStore();

// Acesse o router
const router = useRouter();

// Método de logout
const logout = () => {
  store.dispatch('logout'); // Chama a ação de logout no Vuex
  router.push({ name: 'LoginView' }); // Redireciona para a tela de login
};
</script>

<style lang="stylus" scoped>
.dashboard-container
  display flex
  height 100vh

.sidebar
  width 106px
  background #2693FF
  color white
  display flex
  flex-direction column
  align-items center
  justify-content space-between

  .logo img
    width 50px
    height 50px
    margin-top 14px
  nav ul
    list-style none
    padding 0
    margin-top 20px

  nav li
    display flex
    flex-direction column
    align-items center
    font-size 12px
    font-weight bold
    gap 10px
    margin 15px 0
    cursor pointer

.content
  flex 1
  background #f0f8ff

.topbar
  display flex
  justify-content flex-end
  align-items center
  height 83px
  background white
  border-bottom 1px solid #ddd

.user-info
  display flex
  align-items center
  gap 10px

.avatar
  width 45px
  height 45px
  border-radius 50%

.username
  font-size 15px
  font-weight 500
.role
  font-weight 500
  color #2693FF
  font-size 12px

.tasks
  margin-top 20px
  display flex
  flex-direction row
  justify-content center
  width 100%
  h2, p
    text-align center
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