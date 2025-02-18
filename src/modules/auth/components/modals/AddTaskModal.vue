<template>
  <Modal ref="modalRef">
    <template #default>
      <form @submit.prevent="createTask">
        <InputComponent
          label="Título:"
          type="text"
          v-model="task.title"
          id="title"
          class="title-input"
        />

        <InputComponent
          label="Descrição:"
          type="text"
          v-model="task.description"
          id="description"
          class="title-input"
        />
      </form>
    </template>

    <template #footer>
      <div class="priority-options">
        <label>
          <input type="radio" v-model="task.tag" value="urgent" />
          Urgente
        </label>
        <label>
          <input type="radio" v-model="task.tag" value="important" />
          Importante
        </label>
        <label>
          <input type="radio" v-model="task.tag" value="other" />
          Outras
        </label>
      </div>
      <button class="modal-button confirm" @click="createTask">Adicionar</button>
    </template>
  </Modal>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import Modal from "@/components/molecules/Modal.vue";
import InputComponent from "@/components/atoms/InputComponent.vue";

const store = useStore();
const modalRef = ref(null);

// 📌 Estado local da nova tarefa
const task = ref({ title: "", description: "", tag: "other" });

// 📌 Abre o modal
const open = () => {
  task.value = { title: "", description: "", tag: "other" };
  modalRef.value.open("Cadastrar Tarefa", true);
};

// 📌 Adiciona a tarefa ao Vuex Store
const createTask = () => {
  if (!task.value.title.trim()) return;

  const newTask = {
    ...task.value, // 🔹 Mantém todos os valores de task corretamente
    status: "open",
  };

  store.dispatch("tasks/addTask", newTask);
  modalRef.value.close();
};

// 📌 Expõe o método para ser chamado externamente
defineExpose({ open });
</script>

<style lang="stylus" scoped>
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

.modal-button
  padding 10px 15px
  border none
  border-radius 6px
  cursor pointer
  font-size 14px
  font-weight bold
  transition background 0.2s

  &.confirm
    background #16d08d
    color white
    &:hover
      background-color darken(#16d08d, 10%)
</style>
