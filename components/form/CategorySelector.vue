<script lang="ts" setup>
import { ItemFactory } from "@/types/item_factory";

// フォームの情報
const itemInfo = useCreateItemInfo();

// 選択肢
const items: string[] = [
  "武器",
  "防具",
  "武器迷彩",
  "キャラクタークリエイト",
  "クリエイティブスペース",
  "消費アイテム",
  "素材アイテム",
  "マグフォルム",
  "ミュージックディスク",
  "その他",
];

// 必須入力チェック
const required = (v: string) => !!v || "必ず入力してください";

// カテゴリー選択時の処理
const changeCategory = () => {
  itemInfo.value = ItemFactory.createItem(
    itemInfo.value.name,
    itemInfo.value.commonDetails
  );
  console.log(itemInfo.value);
};
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-select
        v-model="itemInfo.commonDetails.category"
        label="カテゴリー"
        :items="items"
        variant="outlined"
        density="compact"
        :rules="[required]"
        @update:model-value="changeCategory"
      />
    </v-col>
  </v-row>
</template>

<style scoped></style>
