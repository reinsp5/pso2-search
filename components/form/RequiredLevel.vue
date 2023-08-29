<script lang="ts" setup>
import { Item } from "types/item";
import { WeaponSpecificDetails } from "types/weapon";
// 入力情報の共有State
const itemInfo = useCreateItemInfo() as Ref<Item<WeaponSpecificDetails>>;
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-text-field
        :model-value="itemInfo.categorySpecificDetails.requiredLevel"
        @update:model-value="
          itemInfo.categorySpecificDetails.requiredLevel = Number($event)
        "
        type="number"
        label="必要最小Lv."
        variant="outlined"
        density="compact"
      />
    </v-col>
  </v-row>
</template>

<style scoped></style>
