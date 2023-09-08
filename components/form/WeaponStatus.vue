<script lang="ts" setup>
import { Item } from "@/types/item";
import { WeaponSpecificDetails } from "@/types/weapon";

// 入力情報の共有State
const itemInfo = useCreateItemInfo() as Ref<Item<WeaponSpecificDetails>>;

// 必須入力チェック
const required = (v: string) => !!v || "必ず入力してください";
</script>

<template>
  <v-row>
    <v-col cols="6">
      <v-text-field
        :rules="[required]"
        :model-value="itemInfo.categorySpecificDetails.minAttack"
        @update:model-value="
          itemInfo.categorySpecificDetails.minAttack = Number($event)
        "
        label="最小攻撃力"
        type="number"
        variant="outlined"
        density="compact"
      />
    </v-col>
    <v-col cols="6">
      <v-text-field
        :rules="[required]"
        :model-value="itemInfo.categorySpecificDetails.maxAttack"
        @update:model-value="
          itemInfo.categorySpecificDetails.maxAttack = Number($event)
        "
        label="最大攻撃力"
        type="number"
        variant="outlined"
        density="compact"
      />
    </v-col>
    <v-col cols="6">
      <v-text-field
        :model-value="itemInfo.categorySpecificDetails.criticalRate"
        @update:model-value="
          itemInfo.categorySpecificDetails.criticalRate = Number($event)
        "
        label="クリティカル率"
        type="number"
        variant="outlined"
        density="compact"
      />
    </v-col>
    <v-spacer />
  </v-row>
</template>

<style scoped></style>
