<template>
  <Modal ref="modalRef">
    <template #default>
      <form @submit.prevent="updateTask">
        <InputComponent
          label="Título:"
          type="text"
          v-model="task.title"
          id="title"
          class="title-input"
        />

        <InputComponent
          label="Descrição:"
          type="textarea"
          v-model="task.description"
          id="description"
          class="description-input"
          :rows="8"
        />
      </form>
    </template>

    <template #footer>
      <div class="footer">
        <div class="priority-options">
          <label>
            <input type="radio" v-model="task.tag" value="urgent" />
            <span> Urgente </span>
          </label>
          <label>
            <input type="radio" v-model="task.tag" value="important" />
            <span> Importante </span>
          </label>
        </div>
        <button class="modal-button confirm" @click="updateTask" :disabled="!isFormValid">
          Adicionar
        </button>
      </div>
    </template>
  </Modal>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import Modal from "@/components/molecules/Modal.vue";
import InputComponent from "@/components/atoms/InputComponent.vue";
import { useToast } from "@/composables/useToast";

const toast = useToast();
const store = useStore();
const modalRef = ref(null);
const task = ref({ id: null, title: "", description: "", tag: "other", status: "open" });

// 📌 Método para abrir o modal e carregar os dados da tarefa selecionada
const open = (taskToEdit) => {
  task.value = { ...taskToEdit };
  modalRef.value.open("Editar Tarefa", true);
};

// 📌 Validação do formulário (title e description obrigatórios)
const isFormValid = computed(() => {
  return task.value.title.trim() !== "" && task.value.description.trim() !== "";
});

// 📌 Atualiza a tarefa no Vuex Store
const updateTask = () => {
  if (!task.value.title.trim()) return;

  store.dispatch("tasks/editTask", task.value);
  toast("Tarefa editada com sucesso!", "success");
  modalRef.value.close();
};

// 📌 Expõe o método para ser chamado externamente
defineExpose({ open });
</script>

<style lang="stylus" scoped>
.title-input
  margin-bottom 15px
.footer
  display flex
  justify-content space-between
  width 100%

.priority-options
  display flex
  gap 10px
  margin-top 10px

  label
    display flex
    align-items center
    gap 5px
    font-size 14px
    cursor pointer
    color #4e657b
    font-weight 600
    line-height 1.2 /* 📌 Alinha melhor o texto verticalmente */
    span
      position relative
      top 3px
    input[type="radio"]
      width 18px
      height 18px
      appearance none /* 🔥 Remove estilo padrão do navegador */
      border 2px solid #bfdaeb
      border-radius 50%
      position relative
      cursor pointer
      transition all 0.2s ease-in-out

      &:checked
        border-color #2693FF
        background-color white

        &::after
          content ''
          width 8px /* 🔹 Tamanho da bolinha interna */
          height 8px
          border-color #2693FF
          border-radius 50%
          background-color #2693FF
          position absolute
          top 50%
          left 50%
          transform translate(-50%, -50%)
          transition all 0.2s ease-in-out

.modal-button
  padding 10px 15px
  border none
  border-radius 6px
  cursor pointer
  font-size 16px
  font-weight bold
  transition background 0.2s
  height 41px
  width 118px
  &.confirm
    background #16d08d
    color white
    &:hover
      background-color darken(#16d08d, 10%)
    &:disabled
      background-color #a6c1d2
      cursor not-allowed
      color #ffffff
</style>
