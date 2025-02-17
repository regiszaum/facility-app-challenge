<template>
  <div class="fp-box">
    <form @submit.prevent="sendEmailToken">
      <h2>Digite seu usuário/e-mail para recuperar senha.</h2>
      <InputComponent
        label="Nome de usuário ou e-mail:"
        type="text"
        v-model="username"
        class="user-input"
      />
      <button class="email-button" type="submit">Recuperar</button>
      <router-link to="/" class="forgot-password">Voltar para login</router-link>
    </form>
  </div>
</template>
  
<script setup>
import InputComponent from '@/components/atoms/InputComponent.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const username = ref('admin@facilitaapp.com');
const router = useRouter();
const store = useStore();
  
  const sendEmailToken = async () => {
    const credentials = {
      email: username.value,
      password: password.value,
    };
  
    try {
      const success = await store.dispatch('login', credentials);
      if (success) {
        router.push({ path: '/dashboard' });
      } else {
        alert('Credenciais inválidas');
      }
    } catch (error) {
      console.error('Erro durante o login:', error);
      alert('Ocorreu um erro durante o login. Tente novamente.');
    }
  };
</script>
  
<style lang="stylus" scoped>
  .fp-box
    display flex
    flex-direction row
    justify-content center
    width 100%
    form
      display flex
      flex-direction column
      justify-content center
      width 368px
  h2
    font-size 18px
    margin-bottom 36px
    font-weight bold
    color #283848
  .email-button
    width 388px
    background-color #1ad18f
    color white
    border none
    height 55px
    padding 10px
    font-size 16px
    font-weight 700
    font-family 'Gilroy'
    cursor pointer
    border-radius 4px
    margin-bottom 42px
    &:hover
      background-color darken(#1ad18f, 10%)
  .forgot-password
    display block
    text-align start
    color #007bff
    text-decoration underline
    font-size 13px
    &:hover
      cursor pointer
      font-weight bold
  .user-input
    margin-bottom 22px
  .password-input
    margin-bottom 18px

@media (max-width: 768px)
  .fp-box
    width 100%
    height 60vh
</style>
  