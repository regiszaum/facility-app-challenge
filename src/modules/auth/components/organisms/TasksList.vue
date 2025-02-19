<template>
  <div class="tasks-component" @click="closeAllMenus">
    <SearchInput class="search-component" v-model="searchTerm" />

    <!-- 📱 Filtro mobile -->
    <div class="mobile-filters">
      <select v-model="selectedFilter">
        <option value="all">Todas</option>
        <option value="urgent">Urgentes</option>
        <option value="important">Importantes</option>
        <option value="other">Outras</option>
        <option value="closed">Finalizadas</option>
      </select>
    </div>

    <div class="task-list">
      <div
        v-for="task in filteredTasks"
        :key="task.id"
        class="task"
        :class="{ completed: task.status === 'closed' }"
        @click.stop
      >
        <input
          type="checkbox"
          :checked="task.status === 'closed'"
          @change="toggleTaskStatus(task.id)"
        />

        <span class="task-title">{{ task.title }}</span>

        <span v-if="task.tag" class="tag" :class="task.tag">{{
          formatTag(task.tag)
        }}</span>

        <div class="actions">
          <button @click.stop="toggleMenu(task)" class="menu-button">
            <IconComponent
              name="ellipsis-vertical"
              :type="'fas'"
              height="15px"
              width="3.2px"
              color="#5ECDA5"
            />
          </button>

          <div v-if="task.showMenu" class="dropdown-menu" @click.stop>
            <div class="menu-header">
              <button class="edit" @click="editTask(task)">
                <IconComponent
                  name="circle"
                  :type="'fas'"
                  height="9px"
                  width="9px"
                  color="#5ECDA5"
                />
                <span>Editar</span>
              </button>
              <button @click.self="toggleMenu(task)" class="menu-close">
                <IconComponent
                  name="ellipsis-vertical"
                  :type="'fas'"
                  height="15px"
                  width="3.2px"
                  color="#2693ff"
                />
              </button>
            </div>

            <button class="delete" @click="openDeleteTaskModal(task.id, task.title)">
              <IconComponent
                name="circle"
                :type="'fas'"
                height="9px"
                width="9px"
                color="#D6E6EF"
              />
              <span>Excluir</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DeleteTaskModal ref="deleteTaskModalRef" />
  <EditTaskModal ref="editTaskModalRef" />
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from "vue";
import { useStore } from "vuex";
import SearchInput from "../molecules/SearchInput.vue";
import IconComponent from "@/components/atoms/IconComponent.vue";
import DeleteTaskModal from "../modals/DeleteTaskModal.vue";
import EditTaskModal from "../modals/EditTaskModal.vue";

const props = defineProps({
  selectedCategory: String,
});

const store = useStore();
const searchTerm = ref("");
const editTaskModalRef = ref(null);
const deleteTaskModalRef = ref(null);
const emit = defineEmits(["filterTasks"]); // 📢 Emissor de evento
const tasks = computed(() => store.state.tasks?.tasks ?? []);

// 📌 Fecha todos os menus ao clicar fora
const closeAllMenus = () => {
  tasks.value.forEach((task) => (task.showMenu = false));
};

// 📌 Detecta clique fora do componente
const handleClickOutside = (event) => {
  if (!event.target.closest(".task")) {
    closeAllMenus();
  }
};

const selectedFilter = ref("all"); // 🌐 Filtro padrão (todas)


// 📌 Escutando evento global de clique
onMounted(() => {
  window.addEventListener("click", handleClickOutside);
});
onBeforeUnmount(() => {
  window.removeEventListener("click", handleClickOutside);
});

// 📌 Abrir modal de edição
const editTask = (task) => {
  closeAllMenus(); // ✅ Fecha dropdown ao abrir modal
  editTaskModalRef.value.open(task);
};

// 📌 Abrir modal de exclusão
const openDeleteTaskModal = (taskId, taskTitle) => {
  closeAllMenus(); // ✅ Fecha dropdown ao abrir modal
  deleteTaskModalRef.value.open(taskId, taskTitle);
};

// 📌 Obtém e ordena as tarefas
const filteredTasks = computed(() => {
  const priorityOrder = { urgent: 1, important: 2, other: 3 };
  let filtered = tasks.value.filter((task) =>
    [task.title, task.description].some((field) =>
      field?.toLowerCase().includes(searchTerm.value.toLowerCase())
    )
  );

  if (props.selectedCategory !== "all") {
    filtered = filtered.filter((task) =>
      props.selectedCategory === "closed"
        ? task.status === "closed"
        : task.tag === props.selectedCategory
    );
  }

  return filtered.sort((a, b) => priorityOrder[a.tag] - priorityOrder[b.tag]);
});

// 🏷️ Quando o usuário selecionar uma opção no mobile, emite para o componente pai (Tasks.vue)
watch(selectedFilter, (newVal) => {
  emit("filterTasks", newVal);
});

// 📌 Alternar status
const toggleTaskStatus = (taskId) => {
  store.dispatch("tasks/toggleTaskStatus", taskId);
};

// 📌 Alternar dropdown individual
const toggleMenu = (task) => {
  tasks.value.forEach((t) => {
    t.showMenu = t.id === task.id ? !t.showMenu : false;
  });
};

// 📌 Formatar tag de prioridade
const formatTag = (tag) => {
  const tags = { urgent: "Urgente", important: "Importante", other: "Outras" };
  return tags[tag] || "Outras";
};
</script>

<style lang="stylus" scoped>
.tasks-component
  width 100%

.search-component
  margin-bottom 30px

.task-list
  display flex
  flex-direction column
  gap 7px
  max-height 380px
  overflow-y auto
  width 100%

.task
  display flex
  align-items center
  background white
  padding 12px 14px
  border-radius 8px
  justify-content space-between
  cursor pointer
  border 1px solid #e0e0e0
  transition all 0.3s ease
  position relative
  max-height 64px
  color #304458

  &:hover
    box-shadow 0px 4px 0px rgba(0, 0, 0, 0.1)

  &.completed .task-title
    text-decoration line-through
    color #8D9CAA

.task-title
  flex-grow 1
  font-size 16px
  font-weight 600f
  margin-left 10px
  color #283848

input[type="checkbox"]
  width 32px
  height 32px
  appearance none
  border 2px solid #ccc
  border-radius 4px
  cursor pointer
  display flex
  align-items center
  justify-content center
  transition background 0.3s ease-in-out
  position relative

  &:checked
    background-color #0ed984
    border-color #0ed984
    position relative

    &::after
      content '\f00c'                     // Código do ícone 'fa-check'
      font-family "Font Awesome 6 Free"   // ✔ Nome exato da fonte
      font-weight 900                     // ✔ Peso 900 para sólidos
      font-size 16px
      color white
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)

.tag
  padding 4px 10px
  border-radius 12px
  font-size 11px
  font-weight bold
  white-space nowrap

  &.urgent
    background #ff2e79
    color #fff

  &.important
    background #ffc42e
    color #fff

  &.other
    background #d3e5ff
    color #0056b3

// 📌 Estilização do menu de ações ⋮
.actions
  position relative

.menu-button
  background none
  border none
  font-size 20px
  cursor pointer
  padding 5px
  color #666

  &:hover
    color #000

.dropdown-menu
  position absolute
  top -9px
  right 0
  background white
  border 1px solid #ddd
  border-radius 5px
  box-shadow 0px 4px 8px rgba(0, 0, 0, 0.1)
  padding 5px 0
  min-width 140px
  display flex
  flex-direction column
  align-items flex-start
  z-index 10

  /* Botão de fechar e botão "Editar" na mesma linha */
  .menu-header
    display flex
    align-items center
    width 100%
    justify-content space-between
    button
      span
        font-weight 600

.menu-close
  background none
  border none
  cursor pointer
  padding 5px
  display flex
  align-items center
  justify-content end
  font-size 14px
  font-weight bold
  color #2693ff
  transition color 0.2s ease
  width 4px
  &:hover
    color #2693ff

/* Botões do menu */
button
  display flex
  align-items center
  gap 8px
  padding 8px 10px
  width 100%
  text-align left
  border none
  background none
  cursor pointer
  font-size 14px
  color #333
  transition background 0.2s ease

.edit
  color #28a745

.delete
  color #748ca5
  font-weight 600

.mobile-filters
  display none
  margin-bottom 20px
  select
    width 100%
    padding 10px
    border-radius 8px
    border 1px solid #ddd
    font-size 14px
    color #283848
    background-color white
    box-shadow 0px 2px 4px rgba(0, 0, 0, 0.1)

@media (max-width: 672px)
  .mobile-filters
    display block
</style>
