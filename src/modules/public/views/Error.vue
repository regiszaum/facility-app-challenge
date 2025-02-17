<template>
  <div class="error-view">
    <h1>404</h1>
    <p>Página não encontrada</p>
    <button @click="goBack" class="home-link">Voltar para a página anterior</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.go(-1);
};
</script>

<style lang="stylus" scoped>
.error-view
  display flex
  flex-direction column
  justify-content center
  align-items center
  height 100vh
  text-align center
  background-color #f8f9fa
  color #333

h1
  font-size 6rem
  margin-bottom 10px
  font-weight bold
  color #dc3545

p
  font-size 1.5rem
  margin-bottom 20px

.home-link
  padding 10px 20px
  font-size 1.2rem
  color white
  background-color #007bff
  border none
  border-radius 5px
  text-decoration none
  cursor pointer
  &:hover
    background-color darken(#007bff, 10%)

@media (max-width: 768px)
  h1
    font-size 4rem
  p
    font-size 1.2rem
  .home-link
    font-size 1rem
</style>
