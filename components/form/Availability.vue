<script lang="ts" setup>
// 入力情報の共有State
const itemInfo = useCreateItemInfo();

// 必須入力チェック
const required = (v: string) => !!v || "必ず入力してください";

// 入手場所
const available_at = ref(itemInfo.value.commonDetails.availability.join("\n"));
watch(
  available_at,
  (newVal) => {
    itemInfo.value.commonDetails.availability = newVal.split("\n");
  },
  { immediate: true }
);
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-textarea
        v-model="available_at"
        :rules="[required]"
        label="入手方法"
        variant="outlined"
        placeholder="入手方法は、改行単位で複数登録できます。"
        hide-details
      />
    </v-col>
  </v-row>
</template>

<style scoped></style>
