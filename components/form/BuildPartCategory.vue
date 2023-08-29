<script lang="ts" setup>
import { Item } from "types/item";
import { BuildPartSpecificDetails } from "types/build_part";

// 入力情報の共有State
const itemInfo = useCreateItemInfo() as Ref<Item<BuildPartSpecificDetails>>;

// 必須入力チェック
const required = (v: string) => !!v || "必ず入力してください";

const items = [
  "建材",
  "建築物／道具／器具",
  "自然物",
  "家具",
  "ギミックパーツ",
  "立体図形",
  "コラボ",
];
</script>

<template>
  <v-col cols="12">
    <v-select
      v-model="itemInfo.categorySpecificDetails.subCategory"
      label="サブカテゴリー"
      :items="items"
      :rules="[required]"
      variant="outlined"
      density="compact"
    />
  </v-col>
</template>

<style scoped></style>
