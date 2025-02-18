<template>
  <Teleport to="body">
    <div v-if="isVisible" class="modal-overlay" @click="close">
      <div class="modal-container" @click.stop :class="{ 'fade-out': isClosing }">
        <!-- Header -->
        <div class="modal-header">
          <h3>{{ header }}</h3>
          <button class="close-button" @click="close">
            <IconComponent name="xmark" height="12px" color="#4E657B" />
          </button>
        </div>

        <!-- Corpo da Modal -->
        <div class="modal-body">
          <slot></slot>
        </div>

        <!-- Footer (Opcional) -->
        <div v-if="footer" class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref } from "vue";
import IconComponent from "@/components/atoms/IconComponent.vue";

const isVisible = ref(false);
const isClosing = ref(false);
const header = ref("");
const footer = ref(false);

// 📌 Função para abrir a modal e definir título e footer opcional
const open = (title = "Modal", hasFooter = false) => {
  header.value = title;
  footer.value = hasFooter;
  isClosing.value = false;
  isVisible.value = true;
};

// 📌 Função para fechar com efeito de fade-out e limpar dados
const close = () => {
  isClosing.value = true; // Ativa animação de saída
  setTimeout(() => {
    isVisible.value = false;
    resetModal(); // Limpa os dados
  }, 200); // Tempo para animação de saída
};

// 📌 Reset da modal ao fechar
const resetModal = () => {
  header.value = "";
  footer.value = false;
};

// 📌 Expõe os métodos para uso externo
defineExpose({ open, close });
</script>

<style lang="stylus" scoped>
.modal-overlay
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  background rgba(0, 0, 0, 0.4)
  display flex
  justify-content center
  align-items center
  z-index 1000

.modal-container
  background white
  width 90%
  max-width 500px
  padding 25px
  border-radius 8px
  box-shadow 0 4px 10px rgba(0, 0, 0, 0.1)
  display flex
  flex-direction column
  animation fadeIn 0.2s ease-in-out

.modal-header
  display flex
  justify-content space-between
  align-items center
  font-weight bold
  font-size 18px
  color #283848
  padding-bottom 10px
  margin-bottom 15px

.close-button
  background none
  border none
  font-size 20px
  cursor pointer
  padding 0
  position: relative;
  top: -15px;

.modal-body
  font-size 16px
  color #555

.modal-footer
  margin-top 15px
  display flex
  gap 10px
  width 100%

/* Animações */
@keyframes fadeIn
  from
    opacity 0
    transform scale(0.95)
  to
    opacity 1
    transform scale(1)

.fade-out
  animation fadeOut 0.2s ease-in-out

@keyframes fadeOut
  from
    opacity 1
    transform scale(1)
  to
    opacity 0
    transform scale(0.95)
</style>
