<template>
  <font-awesome-icon :icon="[type, name]" :color="color" :size="size" :style="{ width: width, height: height }" />
</template>
  
<script setup>
  // Define as props usando defineProps
  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '#FFF', // Cor padrão
    },
    size: {
      type: String,
      default: '1x', // Tamanho padrão
    },
    type: {
      type: String,
      default: 'fas',
      validator: (value) => {
        return ['fas', 'far'].includes(value);
      },
    },
    width: {
      type: String,
      default: 'auto', // Largura padrão
    },
    height: {
      type: String,
      default: 'auto', // Altura padrão
    },
  });
</script>