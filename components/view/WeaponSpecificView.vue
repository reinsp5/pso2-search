<script lang="ts" setup>
import { WeaponSpecificDetails } from "@/types/weapon";
// Propsの定義
const props = defineProps({
  specificDetails: {
    type: WeaponSpecificDetails,
    required: true,
  },
});
</script>

<template>
  <v-col>
    <v-row>
      <v-col>武器種</v-col>
      <v-col>{{ props.specificDetails.weaponType }}</v-col>
    </v-row>
  </v-col>
</template>

<style scoped></style>
