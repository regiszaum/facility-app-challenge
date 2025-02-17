<template>
  <div v-if="visible" class="toast" :class="type" :style="{ opacity: fadeOpacity }">
    <span class="message">{{ message }}</span>
    <button class="close-button" @click="closeToast">&times;</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
const message = ref('');
const type = ref('');
const fadeOpacity = ref(1);

const showToast = (msg, toastType = 'success', duration = 3000) => {
  message.value = msg;
  type.value = toastType;
  visible.value = true;
  fadeOpacity.value = 1;

  setTimeout(() => {
    fadeOpacity.value = 0;
    setTimeout(() => {
      visible.value = false;
    }, 500); // Tempo para a transição completar antes de esconder o toast
  }, duration);
};

const closeToast = () => {
  fadeOpacity.value = 0;
  setTimeout(() => {
    visible.value = false;
  }, 500);
};

defineExpose({ showToast });
</script>

<style lang="stylus" scoped>
.toast
  position fixed
  top 20px
  right 20px
  padding 15px 20px
  border-radius 5px
  font-weight 600
  color white
  opacity 1
  transition opacity 0.5s ease-in-out
  display flex
  align-items center
  justify-content space-between
  min-width 200px

.message
  flex 1
  font-size 12px

.close-button
  background none
  border none
  color white
  font-size 18px
  font-weight bold
  cursor pointer
  margin-left 10px

  &:hover
    opacity 0.7

.success
  background-color #28a745

.error
  background-color #dc3545

.warning
  background-color #ffc107
</style>
