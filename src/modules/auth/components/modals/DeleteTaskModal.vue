<template>
  <Modal ref="modalRef">
    <template #default>
      <div class="icon-container">
        <IconComponent
          name="trash-can"
          :type="'far'"
          color="#4A6583"
          height="67px"
          width="59px"
        />
      </div>
      <p class="title">
        Tem certeza que deseja <span class="delete-text">excluir</span> esta tarefa?
      </p>
      <p class="subtitle">Esta ação não poderá ser desfeita.</p>
    </template>

    <template #footer>
      <div class="footer">
        <button class="modal-button cancel" @click="modalRef.close">Cancelar</button>
        <button class="modal-button confirm" @click="deleteTask">Confirmar</button>
      </div>
    </template>
  </Modal>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import Modal from "@/components/molecules/Modal.vue";
import { useToast } from "@/composables/useToast";
import IconComponent from "@/components/atoms/IconComponent.vue";

const toast = useToast();
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
    toast("Tarefa excluída com sucesso!", "success");
    modalRef.value.close();
    return;
  }
  toast("Ocorreu um erro ao excluir a tarefa!", "error");
};

// 📌 Expõe o método para ser chamado de fora
defineExpose({ open });
</script>

<style lang="stylus" scoped>
.icon-container
  background-color #eaf5ff
  width 136px
  height 136px
  display flex
  align-items center
  justify-content center
  border-radius 50%
  margin 0 auto 20px auto

.trash-icon
  color #ff4874
  font-size 50px

.title
  font-size 20px
  font-weight bold
  color #283848
  text-align center
  margin-bottom 10px

.delete-text
  color #ff4874

.subtitle
  font-size 14px
  color #77899e
  text-align center
  margin-bottom 30px

.modal-button
  padding 13px 20px
  border none
  border-radius 8px
  cursor pointer
  font-size 16px
  font-weight bold
  transition all 0.2s
  width 130px
  max-width 130px

  &.confirm
    background #ff4874
    color #fff
    &:hover
      background #d91b1b

  &.cancel
    background #1ad18f
    color #fff
    &:hover
      background darken(#1ad18f, 10%)

.footer
  display flex
  justify-content center
  width 100%
  gap 10px
</style>
