<script lang="ts" setup>
const itemInfo = useCreateItemInfo();

// 文字数制限
const textLength = 50;
// 必須入力チェック
const required = (v: string) => !!v || "必ず入力してください";
// 文字数制限
const limitLength = (v: string) =>
  (v && v.length <= textLength) || `${textLength}文字以内で入力してください`;
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-text-field
        v-model="itemInfo.name"
        label="アイテム名"
        variant="outlined"
        density="compact"
        :rules="[required, limitLength]"
        :counter="textLength"
      />
    </v-col>
  </v-row>
</template>

<style scoped></style>
