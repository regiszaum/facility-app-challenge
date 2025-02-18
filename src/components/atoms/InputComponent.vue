<template>
  <div class="input-group" :class="{ validated: validated }">
    <label v-if="label" :for="id"
      >{{ label }} <span v-if="required" class="required">*</span></label
    >
    <!-- 📌 Renderiza input ou textarea dinamicamente -->
    <template v-if="type !== 'textarea'">
      <input
        :type="type"
        :id="id"
        :required="required"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </template>
    <template v-else>
      <textarea
        :id="id"
        :required="required"
        :rows="rows"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      ></textarea>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text", // 📌 Padrão continua 'text' para manter compatibilidade
    },
    label: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: () => `input-${Math.random().toString(36).substr(2, 9)}`,
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    required: {
      type: Boolean,
      default: false, // ✅ 📌 Padrão false para não quebrar o uso anterior
    },
    validated: {
      type: Boolean,
      default: false, // ✅ Mostra borda verde se validado
    },
    rows: {
      type: Number,
      default: 3, // ✅ Altura padrão do textarea
    },
  },
  emits: ["update:modelValue"],
};
</script>

<style lang="stylus" scoped>
.input-group
  display flex
  flex-direction column

  label
    font-size 14px
    font-weight 600
    color #4e657b
    margin-bottom 5px

    .required
      color #ff2e79
      margin-left 3px

  input, textarea
    display flex
    padding 8px
    border 1px solid #ccc
    border-radius 5px
    font-size 14px
    height 35px
    border: solid 2px #bfdaeb
    transition border-color 0.3s ease-in-out
    font-family: 'Gilroy';
    font-weight: 500;
    &:focus
      border-color #2693FF
      outline none

  textarea
    resize none
    min-height 80px
    height auto

/* ✅ Validação visual */
.validated input,
.validated textarea
  border-color #16d08d !important
</style>
