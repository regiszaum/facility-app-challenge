<template>
  <button class="floating-action-button" @click="openAddTaskModal">
    <IconComponent :name="'plus'" height="24px" />
  </button>
  <AddTaskModal ref="addTaskModalRef" />
</template>

<script setup>
import { ref } from 'vue';
import IconComponent from "@/components/atoms/IconComponent.vue";
import AddTaskModal from '../modals/AddTaskModal.vue';

const addTaskModalRef = ref(null);

// 📌 Abre a modal de adicionar tarefa
const openAddTaskModal = () => {
  addTaskModalRef.value.open();
};
</script>
<style lang="stylus" scoped>
.floating-action-button
  position fixed
  bottom 20px
  right 20px
  background #0ed984
  color white
  border none
  width 77px
  height 77px
  border-radius 50%
  font-size 24px
  cursor pointer
  &:hover
    background #28a745
@media (max-width: 672px)
  .floating-action-button
    width 50px
    height 50px
</style>
