<template>
  <div class="login-container">
    <div class="left-section">
      <div class="">
        <img src="@/assets/svg/logo.svg" alt="FacilitaTasks Logo" />
        <h1 class="page-title"><strong>FACILITA</strong><span>TASKS</span></h1>
        <span class="page-subtitle">Gestão de tarefas pessoais</span>
      </div>
    </div>
    <div class="right-section">
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
          <button class="login-button" type="submit">Entrar</button>
          <span class="forgot-password">Esqueci minha senha</span>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import InputComponent from "@/components/atoms/InputComponent.vue";

export default {
  components: {
    InputComponent,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
};
</script>

<style lang="stylus" scoped>
.login-container
  display flex
  height 100vh
  flex-direction row

.left-section
  width 37%
  background-color #2693FF
  display flex
  justify-content center
  align-items center
  color white
  img
    width 80px
    margin-bottom 0px
  .page-title
    font-size 48px
    margin-bottom 0px
    strong
      font-weight bold
    span
      font-weight 300
  .page-subtitle
    flex-grow: 0;
    font-size: 16px;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
.right-section
  width 63%
  display flex
  justify-content center
  align-items center

// .login-box
//   width 300px
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
  width 388px
  background-color #1ad18f
  color white
  border none
  height 55px
  padding 10px
  font-size 16px
  font-weight 700
  font-family 'Gilroy'
  line-height: normal;
  letter-spacing: 1px;
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
  .login-container
    flex-direction column

  .left-section
    width 100%
    height 40vh

  .right-section
    width 100%
    height 60vh
</style>
