<script lang="ts" setup>
import { CommonDetails } from "@/types/common";

// Propsの定義
const props = defineProps({
  commonDetails: {
    type: CommonDetails,
    required: true,
  },
});
</script>

<template>
  <v-col class="my-2" align="center" cols="12">
    <!-- 画像 -->
    <v-img
      :src="props.commonDetails.coverImage.url"
      max-width="200"
      max-height="200"
    />
  </v-col>
  <v-col class="my-2" cols="12">
    <v-row>
      <!-- レアリティ -->
      <v-col>レアリティ</v-col>
      <Rarity :rarity="props.commonDetails.rarity" />
    </v-row>
  </v-col>
  <v-col class="my-2">
    <v-row>
      <v-col>カテゴリ</v-col>
      <v-col>{{ props.commonDetails.category }}</v-col>
    </v-row>
  </v-col>
  <v-col class="my-2" cols="12">
    <v-row>
      <v-col>マイショップ出品</v-col>
      <v-col>
        {{ props.commonDetails.isTradable ? "可能" : "不可" }}
      </v-col>
    </v-row>
  </v-col>
  <v-col class="my-2">
    <v-row>
      <v-col>PSO2リバイバル</v-col>
      <v-col>{{ props.commonDetails.isPso2Revived ? "済" : "未済" }}</v-col>
    </v-row>
  </v-col>
  <v-col class="my-2" cols="12">
    <v-row>
      <v-col>入手方法</v-col>
      <v-col>
        <div
          v-for="(available, index) in props.commonDetails.availability"
          :key="index"
        >
          {{ available }}
        </div>
      </v-col>
    </v-row>
  </v-col>
</template>

<style scoped></style>
