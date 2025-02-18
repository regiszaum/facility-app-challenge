<template>
  <div class="sidebar-filter">
    <div class="sidebar-header">
      <h3>Categorias</h3>
    </div>

    <ul class="sidebar-menu">
      <li :class="{ active: selectedCategory === 'all' }" @click="filterTasks('all')">
        <IconComponent
          name="angle-right"
          :type="'fas'"
          height="18px"
          width="18px"
          :color="selectedCategory === 'all' ? '#2693ff' : '#283848'"
        />
        <span>Todas</span>
      </li>
      <li
        :class="{ active: selectedCategory === 'urgent' }"
        @click="filterTasks('urgent')"
      >
        <IconComponent
          name="angle-right"
          :type="'fas'"
          height="18px"
          width="18px"
          :color="selectedCategory === 'urgent' ? '#2693ff' : '#283848'"
        />
        <span>Urgentes</span>
        <span class="badge-urgent">{{ urgentCount }}</span>
      </li>
      <li
        :class="{ active: selectedCategory === 'important' }"
        @click="filterTasks('important')"
      >
        <IconComponent
          name="angle-right"
          :type="'fas'"
          height="18px"
          width="18px"
          :color="selectedCategory === 'important' ? '#2693ff' : '#283848'"
        />
        <span>Importantes</span>
        <span class="badge-important">{{ importantCount }}</span>
      </li>
      <li :class="{ active: selectedCategory === 'other' }" @click="filterTasks('other')">
        <IconComponent
          name="angle-right"
          :type="'fas'"
          height="18px"
          width="18px"
          :color="selectedCategory === 'other' ? '#2693ff' : '#283848'"
        />
        <span>Outras</span>
      </li>
      <li
        :class="{ active: selectedCategory === 'closed' }"
        @click="filterTasks('closed')"
      >
        <IconComponent
          name="angle-right"
          :type="'fas'"
          height="18px"
          width="18px"
          :color="selectedCategory === 'closed' ? '#2693ff' : '#283848'"
        />
        <span>Finalizadas</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import IconComponent from "@/components/atoms/IconComponent.vue";

const store = useStore();
const selectedCategory = ref("all");

const urgentCount = computed(
  () =>
    store.state.tasks.tasks.filter((t) => t.tag === "urgent" && t.status !== "closed")
      .length
);
const importantCount = computed(
  () =>
    store.state.tasks.tasks.filter((t) => t.tag === "important" && t.status !== "closed")
      .length
);

// Emite um evento para filtrar as tarefas
const emit = defineEmits(["filterTasks"]);

const filterTasks = (category) => {
  selectedCategory.value = category;
  emit("filterTasks", category);
};
</script>

<style lang="stylus" scoped>
.sidebar-filter
  width 220px
  background #f4fbff
  box-shadow 2px 0 5px rgba(0,0,0,0.05)
  display flex
  flex-direction column
  justify-content center

.sidebar-header
  font-size 17px
  font-weight bold
  color #4E5F70
  margin-bottom 52px
  margin-left 40px

.sidebar-menu
  list-style none
  padding 0
  margin 0

  li
    display flex
    align-items center
    margin-left 40px
    padding 10px 0px 10px 0px
    font-size 16px
    cursor pointer
    color #283848
    transition all 0.3s ease
    border-radius 8px
    gap 10px

    &:hover, &.active
      color #2693ff

    span
      color inherit
      font-weight 500
li:hover span, li.active span
    font-weight bold
.badge-urgent
  background #ff2e79
  color #fff !important
  font-size 11px
  padding 4px 7px
  border-radius 50%

.badge-important
  background #FFC42E
  color #fff !important
  font-size 11px
  padding 4px 7px
  border-radius 50%
</style>
