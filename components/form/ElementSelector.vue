<script lang="ts" setup>
import { Item } from "types/item";
import { WeaponSpecificDetails } from "types/weapon";
// 入力情報の共有State
const itemInfo = useCreateItemInfo() as Ref<Item<WeaponSpecificDetails>>;

const items = ["炎属性", "氷属性", "雷属性", "風属性", "光属性", "闇属性"];
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-select
        v-model="itemInfo.categorySpecificDetails.element"
        label="属性"
        :items="items"
        variant="outlined"
        density="compact"
        clearable
      />
    </v-col>
  </v-row>
</template>

<style scoped></style>
