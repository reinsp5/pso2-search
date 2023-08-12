<script lang="ts" setup>
// 入力情報の共有State
const itemInfo = useCreateItemInfo();
</script>

<template>
  <v-row>
    <v-col md="6">
      <v-switch
        v-model="itemInfo.commonDetails.isPso2Revived"
        color="success"
        :label="`PSO2リバイバル: ${
          itemInfo.commonDetails.isPso2Revived ? '済' : '未済'
        }`"
        hide-details
        inset
      />
    </v-col>
    <v-col md="6">
      <v-switch
        v-model="itemInfo.commonDetails.isTradable"
        color="success"
        :label="`マイショップ出品: ${
          itemInfo.commonDetails.isTradable ? '可能' : '不可'
        }`"
        hide-details
        inset
      />
    </v-col>
  </v-row>
</template>

<style scoped></style>
