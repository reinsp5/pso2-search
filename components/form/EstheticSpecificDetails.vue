<script lang="ts" setup>
import { Esthetic } from "types/esthetic";

// 入力情報の共有State
const itemInfo = useCreateItemInfo() as Ref<Esthetic>;

// 必須入力チェック
const required = (v: string) => !!v || "必ず入力してください";

const items = [
  "顔",
  "ヘアスタイル",
  "瞳・まゆ・まつげ",
  "口・歯・耳・角",
  "メイクパターン",
  "ボディペイント",
  "アクセサリ（頭部）",
  "アクセサリ（その他）",
  "ステッカー",
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
  <v-row>
    <v-col>
      <v-radio-group
        label="ボディタイプ"
        v-model="itemInfo.categorySpecificDetails.bodyType"
        inline
        hide-details
        :rules="[required]"
      >
        <v-radio label="T1（ヒト型）" value="T1"></v-radio>
        <v-radio label="T2（キャスト型）" value="T2"></v-radio>
      </v-radio-group>
    </v-col>
  </v-row>
  <v-row no-gutters>
    <v-col>
      <v-col cols="12">
        <v-switch
          v-model="itemInfo.categorySpecificDetails.colorSetting"
          color="success"
          :label="`カラー設定可否：${
            itemInfo.commonDetails.isPso2Revived ? '可' : '不可'
          }`"
          hide-details
          inset
        />
      </v-col>
    </v-col>
  </v-row>
</template>

<style scoped></style>
types/esthetic