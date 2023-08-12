<script lang="ts" setup>
const props = defineProps({
  subCategoryType: {
    type: String,
    required: true,
  },
});
// 入力情報の共有State
const itemInfo = useCreateItemInfo() as Ref<>;

// 必須入力チェック
const required = (v: string) => !!v || "必ず入力してください";

// 選択肢
const items = ref<string[]>([]);

const characterCreateCategories = [
  "顔",
  "ヘアスタイル",
  "瞳",
  "まゆ毛",
  "まつ毛",
  "口",
  "歯",
  "耳",
  "角",
  "フェイスペイント",
  "ボディペイント",
  "アクセサリー",
  "ステッカー",
  "ボイス",
  "モーション",
  "コスチューム",
  "セットウェア",
  "アウターウェア",
  "ベースウェア",
  "インナーウェア",
  "ボディパーツ",
  "アームパーツ",
  "レッグパーツ",
];

// クリエイティブスペース
const creativeSpaceItems = [
  "建材",
  "建築物／道具／器具",
  "自然物",
  "家具",
  "ギミックパーツ",
  "立体図形",
  "コラボ",
];

// 消費アイテム
const consumableItems = [
  "ロビーアクション",
  "モーション",
  "スタンプ",
  "特殊能力カプセル",
  "マイショップアイテム",
  "その他",
];


</script>

<template>
  <v-col cols="12">
    <v-select
      v-model="itemInfo.sub_category"
      class="mt-4"
      label="サブカテゴリー"
      :items="items"
      :rules="[required]"
      variant="outlined"
      density="compact"
    />
  </v-col>
</template>

<style scoped></style>
