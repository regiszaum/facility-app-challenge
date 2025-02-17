<template>
  <div class="dashboard">
    <div class="header">
      <h1>Bem-vindo, {{ userName }}!</h1>
      <p class="clock">{{ time }}</p>
    </div>
    <div class="cards-container">
      <div class="card urgent">
        <h2>Urgentes</h2>
        <p>5 tarefas</p>
      </div>
      <div class="card important">
        <h2>Importantes</h2>
        <p>8 tarefas</p>
      </div>
      <div class="card normal">
        <h2>Normais</h2>
        <p>12 tarefas</p>
      </div>
      <div class="card others">
        <h2>Outras</h2>
        <p>3 tarefas</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const user = computed(() => store.state.users.find(u => u.email === 'user@facilitaapp.com'));

const userName = computed(() => user.value?.name || 'Usuário');
const time = ref(new Date().toLocaleTimeString());

const updateTime = () => {
  time.value = new Date().toLocaleTimeString();
};

onMounted(() => {
  setInterval(updateTime, 1000);
});
</script>

<style lang="stylus" scoped>
.dashboard
  display flex
  flex-direction column
  align-items center
  justify-content center
  margin-top 140px
  text-align center
  background-color #E9F4FB

.header
  margin-bottom 20px
  h1
    text-align center
    color #283848
    font-size 26px
    font-weight bold

.clock
  font-size 1.5rem
  font-weight bold
  color #2693FF
  margin-top 20px

.cards-container
  display grid
  grid-template-columns repeat(auto-fit, minmax(200px, 1fr))
  gap 20px
  width 80%
  max-width 900px

.card
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

.others
  border-left 5px solid #6c757d

@media (max-width: 768px)
  .cards-container
    grid-template-columns 1fr
</style>
