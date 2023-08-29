<script lang="ts" setup>
import { WeaponSkinSpecificDetails } from "@/types/weapon_skin";
import { Item } from "types/item";
// const itemInfo.categorySpecificDetails = ref<itemInfo.categorySpecificDetails>(new itemInfo.categorySpecificDetails());
// 入力情報の共有State
const itemInfo = useCreateItemInfo() as Ref<Item<WeaponSkinSpecificDetails>>;
</script>

<template>
  <v-checkbox
    v-model="itemInfo.categorySpecificDetails.canSword"
    label="ソード"
  />
  <v-checkbox
    v-model="itemInfo.categorySpecificDetails.canPartisan"
    label="パルチザン"
  />
  <v-checkbox
    v-model="itemInfo.categorySpecificDetails.canWiredLance"
    label="ワイヤードランス"
  />
  <v-checkbox
    v-model="itemInfo.categorySpecificDetails.canTwinDagger"
    label="ツインダガー"
  />
  <v-checkbox
    v-model="itemInfo.categorySpecificDetails.canDoubleSaber"
    label="ダブルセイバー"
  />
  <v-checkbox
    v-model="itemInfo.categorySpecificDetails.canKnuckle"
    label="ナックル"
  />
  <v-checkbox
    v-model="itemInfo.categorySpecificDetails.canKatana"
    label="カタナ"
  />
  <v-checkbox
    v-model="itemInfo.categorySpecificDetails.canDualBlade"
    label="デュアルブレード"
  />
  <v-checkbox
    v-model="itemInfo.categorySpecificDetails.canAssaultRifle"
    label="アサルトライフル"
  />
  <v-checkbox
    v-model="itemInfo.categorySpecificDetails.canLauncher"
    label="ランチャー"
  />
  <v-checkbox
    v-model="itemInfo.categorySpecificDetails.canTwinMachinegun"
    label="ツインマシンガン"
  />
  <v-checkbox
    v-model="itemInfo.categorySpecificDetails.canBulletBow"
    label="バレットボウ"
  />
  <v-checkbox
    v-model="itemInfo.categorySpecificDetails.canGunslash"
    label="ガンスラッシュ"
  />
  <v-checkbox
    v-model="itemInfo.categorySpecificDetails.canRod"
    label="ロッド"
  />
  <v-checkbox
    v-model="itemInfo.categorySpecificDetails.canTalis"
    label="タリス"
  />
  <v-checkbox
    v-model="itemInfo.categorySpecificDetails.canWand"
    label="ウォンド"
  />
  <v-checkbox
    v-model="itemInfo.categorySpecificDetails.canJetBoots"
    label="ジェットブーツ"
  />
  <v-checkbox
    v-model="itemInfo.categorySpecificDetails.canTakt"
    label="タクト"
  />
</template>

<style scoped></style>
