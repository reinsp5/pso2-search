<script lang="ts" setup>
const loading = ref(false);
</script>

<template>
  <v-btn
    :loading="loading"
    class="text-none"
    color="blue-darken-4"
    size="x-large"
    variant="flat"
    type="submit"
    block
  >
    登録する
  </v-btn>
</template>

<style scoped></style>
