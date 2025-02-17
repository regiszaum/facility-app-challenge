<template>
  <div class="dashboard-container">
    <Navbar />
    <main class="content">
      <UserInfoHeader />
      <RouterView />
    </main>
    <AddTaskButton />
  </div>
</template>

<script setup>
import AddTaskButton from './components/molecules/AddTaskButton.vue';
import UserInfoHeader from './components/atoms/UserInfoHeader.vue';
import Navbar from './components/molecules/Navbar.vue';
</script>

<style lang="stylus" scoped>
.dashboard-container
  display flex
  height 100vh
  width 100%
.content
  flex 1
  background #f0f8ff
</style>