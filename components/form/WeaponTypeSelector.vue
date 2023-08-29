<script lang="ts" setup>
import { Item } from "types/item";
import { WeaponSpecificDetails } from "types/weapon";

// 入力情報の共有State
const itemInfo = useCreateItemInfo() as Ref<Item<WeaponSpecificDetails>>;

// 選択肢
const items: string[] = [
  "ソード",
  "ワイヤードランス",
  "パルチザン",
  "ツインダガー",
  "ダブルセイバー",
  "ナックル",
  "カタナ",
  "デュアルブレード",
  "アサルトライフル",
  "ランチャー",
  "ツインマシンガン",
  "バレットボウ",
  "ガンスラッシュ",
  "ロッド",
  "タリス",
  "ウォンド",
  "ジェットブーツ",
  "タクト",
];

// 必須入力チェック
const required = (v: string) => !!v || "必ず入力してください";
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-select
        v-model="itemInfo.categorySpecificDetails.weaponType"
        label="武器種"
        :items="items"
        variant="outlined"
        density="compact"
        :rules="[required]"
      />
    </v-col>
  </v-row>
</template>

<style scoped></style>
