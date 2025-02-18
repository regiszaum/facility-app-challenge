<template>
  <div class="login-box">
    <form @submit.prevent="doLogin">
      <h2>Entre com seus dados de acesso.</h2>
      <InputComponent
        label="Nome de usuário ou e-mail:"
        type="text"
        v-model="username"
        class="user-input"
      />
      <InputComponent
        label="Senha:"
        type="password"
        v-model="password"
        class="password-input"
      />
      <button class="login-button" type="submit" :disabled="loading">
        <span v-if="!loading">Entrar</span>
        <span v-else class="loading-status">
          <span class="loading-component">
            <Loading height="5px" width="5px"/>
          </span>
          <span>Carregando</span>
        </span>
      </button>
      <router-link to="/forgot-password" class="forgot-password">Esqueci minha senha</router-link>
    </form>
  </div>
</template>

<script setup>
import InputComponent from '@/components/atoms/InputComponent.vue';
import Loading from '@/components/atoms/Loading.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { useToast } from '@/composables/useToast';

const username = ref('user@facilitaapp.com');
const password = ref('12345');
const router = useRouter();
const store = useStore();
const loading = ref(false);
const toast = useToast();

const doLogin = async () => {
  if (!username.value || !password.value) {
    toast("Preencha todos os campos!", "warning");
    return;
  }

  loading.value = true;

  setTimeout(async () => {
    const credentials = {
      email: username.value,
      password: password.value,
    };

    try {
      const success = await store.dispatch('user/login', credentials);

      if (success) {
        toast("Login realizado com sucesso!", "success");
        router.push({ path: '/account' });
      } else {
        toast("Usuário ou senha inválidos!", "error");
      }
    } catch (error) {
      toast("Aconteceu um erro! Contate o suporte.", "error");
      console.error("Erro no login:", error);
    } finally {
      loading.value = false;
    }
  }, 2000);
};
</script>

<style lang="stylus" scoped>
.login-box
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

.login-button
  width 100%
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
  &:disabled
    border none
    background-color #a6c1d2
    cursor not-allowed
    color #ffffff
  &:hover
    background-color darken(#1ad18f, 10%)
  &:hover:disabled
    background-color #a6c1d2
    cursor not-allowed
    color #ffffff

.loading-status
  display flex
  justify-content center
  .loading-component
    margin-right 5px

.forgot-password
  display block
  text-align start
  color #007bff
  text-decoration underline
  font-size 13px
  &:hover
    cursor pointer
    font-weight bold

.user-input, .password-input
  margin-bottom 22px
  width 100%
  display flex

@media (max-width: 768px)
  .login-box
    width 100%
    flex 1
    form
      width 100%
      padding 20px
      .forgot-password
        font-size 15px
</style>
