<template>
    <div id="app">
      <h1>Hello Vue 3 + Vuex + Stylus + FontAwesome</h1>
      <button @click="increment">
        <font-awesome-icon :icon="['fas', 'plus']" /> Count: {{ count }}
      </button>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['count']),
    },
    methods: {
      ...mapActions(['increment']),
    },
  };
  </script>
  
  <style lang="stylus">
  #app
    text-align center
    margin-top 40px
  
  button
    background-color #42b983
    color white
    border none
    padding 10px 20px
    font-size 16px
    cursor pointer
    display flex
    align-items center
    gap 8px
    &:hover
      background-color darken(#42b983, 10%)
  </style>
  