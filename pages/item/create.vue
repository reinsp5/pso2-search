<script lang="ts" setup>
//認証必須
definePageMeta({
  middleware: ["auth"],
});

// SEO情報
useSeoMeta({
  title: "アイテム情報登録 | PSO2 Search Unofficial Item Search Engine",
});
</script>

<template>
  <v-container class="h-100">
    <v-row class="h-100">
      <v-col>
        <v-card class="mx-auto" variant="flat" max-width="1280">
          <v-card-title class="d-flex align-center justify-center text-h5">
            アイテム登録
          </v-card-title>
          <CreateForm />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
