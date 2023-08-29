<script lang="ts" setup>
import { Item } from 'types/item';
import { WearSpecificDetails } from 'types/wear';

// 入力情報の共有State
const itemInfo = useCreateItemInfo() as Ref<Item<WearSpecificDetails>>;

// 必須入力チェック
const required = (v: string) => !!v || "必ず入力してください";

const items = [
  "ベースウェア",
  "アウター",
  "インナー",
  "セットウェア",
  "コスチューム"
];
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-select
        v-model="itemInfo.categorySpecificDetails.subCategory"
        class="mt-4"
        label="サブカテゴリー"
        :items="items"
        :rules="[required]"
        variant="outlined"
        density="compact"
      />
    </v-col>
  </v-row>
</template>

<style scoped></style>
