<script lang="ts" setup>
import { MagForm } from "types/mag_form";

// 入力情報の共有State
const itemInfo = useCreateItemInfo() as Ref<MagForm>;
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-switch
        v-model="itemInfo.categorySpecificDetails.canChangeColor"
        color="success"
        :label="`マグカラー変更可否: ${
          itemInfo.commonDetails.isPso2Revived ? '可' : '不可'
        }`"
        hide-details
        inset
      />
    </v-col>
  </v-row>
</template>

<style scoped></style>
