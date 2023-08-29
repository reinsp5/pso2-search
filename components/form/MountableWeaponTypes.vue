<script lang="ts" setup>
import { Item } from "types/item";
import { WeaponSkinSpecificDetails } from "types/weapon_skin";

// 入力情報の共有State
const itemInfo = useCreateItemInfo() as Ref<Item<WeaponSkinSpecificDetails>>;
const allWeapon = ref(false);

const checkAll = () => {
  if(allWeapon.value) {
    itemInfo.value.categorySpecificDetails.allWeaponTrue();
  }else{
    itemInfo.value.categorySpecificDetails.allWeaponFalse();
  }
}
</script>

<template>
  <div >装備可能武器種選択（複数可）</div>
  <v-row>
    <v-col cols="4">
      <v-checkbox
        v-model="allWeapon"
        label="すべて"
        hide-details
        @update:model-value="checkAll"
      />
    </v-col>
    <v-spacer />
  </v-row>
  <div class="text-caption">打撃武器</div>
  <v-row no-gutters>
    <v-col cols="4" class="pa-0 ma-0">
      <v-checkbox
        v-model="itemInfo.categorySpecificDetails.canSword"
        label="ソード"
        color="red"
        hide-details
      />
    </v-col>
    <v-col cols="4" class="pa-0 ma-0">
      <v-checkbox
        v-model="itemInfo.categorySpecificDetails.canWiredLance"
        label="ワイヤードランス"
        color="red"
        hide-details
      />
    </v-col>
    <v-col cols="4" class="pa-0 ma-0">
      <v-checkbox
        v-model="itemInfo.categorySpecificDetails.canPartisan"
        label="パルチザン"
        color="red"
        hide-details
      />
    </v-col>
    <v-col cols="4" class="pa-0 ma-0">
      <v-checkbox
        v-model="itemInfo.categorySpecificDetails.canTwinDagger"
        label="ツインダガー"
        color="red"
        hide-details
      />
    </v-col>
    <v-col cols="4" class="pa-0 ma-0">
      <v-checkbox
        v-model="itemInfo.categorySpecificDetails.canDoubleSaber"
        label="ダブルセイバー"
        color="red"
        hide-details
      />
    </v-col>
    <v-col cols="4" class="pa-0 ma-0">
      <v-checkbox
        v-model="itemInfo.categorySpecificDetails.canKnuckle"
        label="ナックル"
        color="red"
        hide-details
      />
    </v-col>
    <v-col cols="4" class="pa-0 ma-0">
      <v-checkbox
        v-model="itemInfo.categorySpecificDetails.canKatana"
        label="カタナ"
        color="red"
        hide-details
      />
    </v-col>
    <v-col cols="4" class="pa-0 ma-0">
      <v-checkbox
        v-model="itemInfo.categorySpecificDetails.canDualBlade"
        label="デュアルブレード"
        color="red"
        hide-details
      />
    </v-col>
    <v-spacer />
  </v-row>
  <div class="mt-4 text-caption">射撃武器</div>
  <v-row no-gutters>
    <v-col cols="4" class="pa-0 ma-0">
      <v-checkbox
        v-model="itemInfo.categorySpecificDetails.canAssaultRifle"
        label="アサルトライフル"
        color="blue-darken-3"
        hide-details
      />
    </v-col>
    <v-col cols="4" class="pa-0 ma-0">
      <v-checkbox
        v-model="itemInfo.categorySpecificDetails.canLauncher"
        label="ランチャー"
        color="blue-darken-3"
        hide-details
      />
    </v-col>
    <v-col cols="4" class="pa-0 ma-0">
      <v-checkbox
        v-model="itemInfo.categorySpecificDetails.canTwinMachinegun"
        label="ツインマシンガン"
        color="blue-darken-3"
        hide-details
      />
    </v-col>
    <v-col cols="4" class="pa-0 ma-0">
      <v-checkbox
        v-model="itemInfo.categorySpecificDetails.canBulletBow"
        label="バレットボウ"
        color="blue-darken-3"
        hide-details
      />
    </v-col>
    <v-col cols="4" class="pa-0 ma-0">
      <v-checkbox
        v-model="itemInfo.categorySpecificDetails.canGunslash"
        label="ガンスラッシュ"
        color="blue-darken-3"
        hide-details
      />
    </v-col>
    <v-spacer />
  </v-row>
  <div class="mt-4 text-caption">法撃武器</div>
  <v-row no-gutters>
    <v-col cols="4" class="pa-0 ma-0">
      <v-checkbox
        v-model="itemInfo.categorySpecificDetails.canRod"
        label="ロッド"
        color="orange"
        hide-details
      />
    </v-col>
    <v-col cols="4" class="pa-0 ma-0">
      <v-checkbox
        v-model="itemInfo.categorySpecificDetails.canTalis"
        label="タリス"
        color="orange"
        hide-details
      />
    </v-col>
    <v-col cols="4" class="pa-0 ma-0">
      <v-checkbox
        v-model="itemInfo.categorySpecificDetails.canWand"
        label="ウォンド"
        color="orange"
        hide-details
      />
    </v-col>
    <v-col cols="4" class="pa-0 ma-0">
      <v-checkbox
        v-model="itemInfo.categorySpecificDetails.canJetBoots"
        label="ジェットブーツ"
        color="orange"
        hide-details
      />
    </v-col>
    <v-col cols="4" class="pa-0 ma-0">
      <v-checkbox
        v-model="itemInfo.categorySpecificDetails.canTakt"
        label="タクト"
        color="orange"
        hide-details
      />
    </v-col>
    <v-spacer />
  </v-row>
</template>

<style scoped></style>
