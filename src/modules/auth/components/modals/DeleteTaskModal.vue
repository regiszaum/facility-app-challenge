<template>
  <Modal ref="modalRef">
    <template #default>
      <p>
        Tem certeza de que deseja excluir a tarefa "<strong>{{ taskTitle }}</strong
        >"?
      </p>
    </template>

    <template #footer>
      <button class="modal-button confirm" @click="deleteTask">Excluir</button>
      <button class="modal-button cancel" @click="modalRef.close">Cancelar</button>
    </template>
  </Modal>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import Modal from "@/components/molecules/Modal.vue";

const store = useStore();
const modalRef = ref(null);
const taskId = ref(null);
const taskTitle = ref("");

// 📌 Abre o modal e recebe os dados da tarefa
const open = (id, title) => {
  taskId.value = id;
  taskTitle.value = title;
  modalRef.value.open("Excluir Tarefa", true);
};

// 📌 Exclui a tarefa do Vuex Store
const deleteTask = () => {
  if (taskId.value) {
    store.dispatch("tasks/deleteTask", taskId.value);
  }
  modalRef.value.close();
};

// 📌 Expõe o método para ser chamado de fora
defineExpose({ open });
</script>

<style lang="stylus" scoped>
p
  font-size 16px
  color #333
  text-align center

.modal-button
  padding 10px 15px
  border none
  border-radius 6px
  cursor pointer
  font-size 14px
  font-weight bold
  transition background 0.2s
  &.confirm
    background #ff2e2e
    color white
    &:hover
      background #d91b1b
  &.cancel
    background #ccc
    color black
    margin-left 10px
    &:hover
      background #aaa
</style>
