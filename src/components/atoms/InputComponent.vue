<template>
  <div class="input-group">
    <label v-if="label" :for="id">{{ label }}</label>
    <input :type="type" :id="id" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
  </div>
</template>
  
<script>
export default {
    props: {
      type: {
        type: String,
        default: 'text',
      },
      label: {
        type: String,
        default: '',
      },
      id: {
        type: String,
        default: () => `input-${Math.random().toString(36).substr(2, 9)}`,
      },
      modelValue: {
        type: String,
        default: '',
      },
    },
    emits: ['update:modelValue'],
  };
</script>
  
<style lang="stylus" scoped>
.input-group
  display flex
  flex-direction column
  label
    font-size: 14px;
    font-weight: 600;
    font-stretch: normal
    font-style: normal
    line-height: normal
    letter-spacing: normal
    text-align: left
    color: #4e657b
    margin-bottom 5px
  input
    display flex
    justify-content start
    flex-direction row
    padding 8px
    border 1px solid #ccc
    border-radius 4px
    font-size 14px
    height: 35px;
    border-radius: 5px;
    border: solid 2px #bfdaeb;
    &:focus
      border-color #2693FF
      outline none
</style>
  