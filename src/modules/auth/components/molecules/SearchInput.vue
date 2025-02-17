<template>
    <div class="search-container">
      <input 
        type="text" 
        v-model="searchTerm" 
        class="search-input" 
        placeholder="Buscar Tarefas" 
      />
      <IconComponent :name="'search'" height="25px" color="#aecbde"/>
    </div>
</template>
  
<script setup>
import IconComponent from "@/components/atoms/IconComponent.vue";
import { ref } from 'vue';
  
const searchTerm = ref('');
</script>
  
<style lang="stylus" scoped>
  .search-container
    display flex
    align-items center
    background-color transparent
    padding 10px
    border-radius 8px
    border 1px solid #BFDAEB
    width 100%
  
  .search-input
    border none
    outline none
    background transparent
    flex 1
    font-size 16px
    color #6C8BA4
  
  .search-icon
    color #6C8BA4
    margin-left 10px
  
  @media (max-width: 768px)
    .search-container
      max-width 100%
</style>
  