<script lang="ts" setup>
import { BuildPart } from "@/types/build_part";

// 入力情報の共有State
const itemInfo = useCreateItemInfo() as Ref<BuildPart>;

// 必須入力チェック
const required = (v: string) => !!v || "必ず入力してください";
</script>

<template>
  <v-row>
    <BuildPartCategory />
    <v-col cols="6">
      <v-switch
        v-model="itemInfo.categorySpecificDetails.canRegister"
        color="success"
        :label="`登録可否: ${
          itemInfo.commonDetails.isPso2Revived ? '可' : '不可'
        }`"
        hide-details
        inset
      />
    </v-col>
    <v-col cols="6">
      <v-switch
        v-model="itemInfo.categorySpecificDetails.canScale"
        color="success"
        :label="`サイズ変更可否: ${
          itemInfo.commonDetails.isPso2Revived ? '可' : '不可'
        }`"
        hide-details
        inset
      />
    </v-col>
    <v-col cols="6">
      <v-switch
        v-model="itemInfo.categorySpecificDetails.canRotate"
        color="success"
        :label="`回転可否: ${
          itemInfo.commonDetails.isPso2Revived ? '可' : '不可'
        }`"
        hide-details
        inset
      />
    </v-col>
    <v-col cols="6">
      <v-switch
        v-model="itemInfo.categorySpecificDetails.canChangeColor"
        color="success"
        :label="`カラー変更可否: ${
          itemInfo.commonDetails.isPso2Revived ? '可' : '不可'
        }`"
        hide-details
        inset
      />
    </v-col>
    <v-spacer />
    <v-col cols="6">
      <v-text-field
        :rules="[required]"
        :model-value="itemInfo.categorySpecificDetails.maxCount"
        @update:model-value="
          itemInfo.categorySpecificDetails.maxCount = Number($event)
        "
        label="最大数"
        type="number"
        variant="outlined"
        density="compact"
      />
    </v-col>
    <v-col cols="6">
      <v-text-field
        :rules="[required]"
        :model-value="itemInfo.categorySpecificDetails.purchaseCost"
        @update:model-value="
          itemInfo.categorySpecificDetails.purchaseCost = Number($event)
        "
        label="必要GP"
        type="number"
        variant="outlined"
        density="compact"
      />
    </v-col>
  </v-row>
</template>

<style scoped></style>
