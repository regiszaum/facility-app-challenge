<template>
  <div class="dashboard">
    <div class="header">
      <h1>Bem-vindo, {{ userName }}!</h1>
      <p class="clock">{{ time }}</p>
    </div>
    <div class="cards-container">
      <DashboardCard title="Tarefas Urgentes" :count="urgentCount" type="urgent" />
      <DashboardCard
        title="Tarefas Importantes"
        :count="importantCount"
        type="important"
      />
      <DashboardCard title="Tarefas Normais" :count="normalCount" type="normal" />
      <DashboardCard title="Outras Tarefas" :count="otherCount" type="other" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import DashboardCard from "../components/atoms/DashboardCard.vue";

const store = useStore();
const user = computed(
  () => store.state.user?.users?.find((u) => u.email === "user@facilitaapp.com") || {}
);

const userName = computed(() => user.value?.name || "Usuário");
const time = ref(new Date().toLocaleTimeString());

const updateTime = () => {
  time.value = new Date().toLocaleTimeString();
};

// Obtendo a contagem de tarefas do Vuex
const urgentCount = computed(() => store.getters["tasks/urgentTasks"].length);
const importantCount = computed(() => store.getters["tasks/importantTasks"].length);
const normalCount = computed(() => store.getters["tasks/openTasks"].length);
const otherCount = computed(() => store.getters["tasks/otherTasks"].length);

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
  width 60%
  max-width 900px

@media (max-width: 768px)
  .header
    h1
      font-size 18px
  .cards-container
    grid-template-columns 2fr

@media (max-width: 576px)
  .header
    h1
      font-size 13px
      .clock
        font-size 14px
</style>
