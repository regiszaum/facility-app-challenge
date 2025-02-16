<template>
    <font-awesome-icon :icon="['fas', name]" />
</template>
  
<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
    },
};
</script>
  