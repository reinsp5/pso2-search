<script lang="ts" setup>
import { WeaponSkinSpecificDetails } from "@/types/weapon_skin";
const weaponSkinSpecificDetails = ref<WeaponSkinSpecificDetails>(new WeaponSkinSpecificDetails());
</script>

<template>
  <v-checkbox v-model="weaponSkinSpecificDetails.canSword" label="ソード" />
  <v-checkbox v-model="weaponSkinSpecificDetails.canPartisan" label="パルチザン" />
  <v-checkbox v-model="weaponSkinSpecificDetails.canWiredLance" label="ワイヤードランス" />
  <v-checkbox v-model="weaponSkinSpecificDetails.canTwinDagger" label="ツインダガー" />
  <v-checkbox v-model="weaponSkinSpecificDetails.canDoubleSaber" label="ダブルセイバー" />
  <v-checkbox v-model="weaponSkinSpecificDetails.canKnuckle" label="ナックル" />
  <v-checkbox v-model="weaponSkinSpecificDetails.canKatana" label="カタナ" />
  <v-checkbox v-model="weaponSkinSpecificDetails.canDualBlade" label="デュアルブレード" />
  <v-checkbox v-model="weaponSkinSpecificDetails.canAssaultRifle" label="アサルトライフル" />
  <v-checkbox v-model="weaponSkinSpecificDetails.canLauncher" label="ランチャー" />
  <v-checkbox v-model="weaponSkinSpecificDetails.canTwinMachinegun" label="ツインマシンガン" />
  <v-checkbox v-model="weaponSkinSpecificDetails.canBulletBow" label="バレットボウ" />
  <v-checkbox v-model="weaponSkinSpecificDetails.canGunslash" label="ガンスラッシュ" />
  <v-checkbox v-model="weaponSkinSpecificDetails.canRod" label="ロッド" />
  <v-checkbox v-model="weaponSkinSpecificDetails.canTalis" label="タリス" />
  <v-checkbox v-model="weaponSkinSpecificDetails.canWand" label="ウォンド" />
  <v-checkbox v-model="weaponSkinSpecificDetails.canJetBoots" label="ジェットブーツ" />
  <v-checkbox v-model="weaponSkinSpecificDetails.canTakt" label="タクト" />
</template>

<style scoped></style>
