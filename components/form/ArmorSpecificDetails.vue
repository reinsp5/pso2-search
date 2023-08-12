<script lang="ts" setup>
import { Armor } from "@/types/armor";

// 入力情報の共有State
const itemInfo = useCreateItemInfo() as Ref<Armor>;

// 表示中のときは必須入力チェック
const required = (v: string) => !!v || "必ず入力してください";
</script>

<template>
  <v-col>
    <v-row>
      <v-col cols="6" class="pl-0 pt-0">
        <v-text-field
          :rules="[required]"
          :model-value="itemInfo.categorySpecificDetails.minDefence"
          @update:model-value="
            itemInfo.categorySpecificDetails.minDefence = Number($event)
          "
          label="最小防御力"
          type="number"
          variant="outlined"
          density="compact"
        />
      </v-col>
      <v-col cols="6" class="pr-0 pt-0">
        <v-text-field
          :rules="[required]"
          :model-value="itemInfo.categorySpecificDetails.maxDefence"
          @update:model-value="
            itemInfo.categorySpecificDetails.maxDefence = Number($event)
          "
          label="最大防御力"
          type="number"
          variant="outlined"
          density="compact"
        />
      </v-col>
    </v-row>
  </v-col>
  <v-spacer />
  <v-row>
    <v-col cols="6">
      <v-text-field
        :model-value="itemInfo.categorySpecificDetails.strDamageUp"
        @update:model-value="
          itemInfo.categorySpecificDetails.strDamageUp = Number($event)
        "
        type="number"
        label="打撃上昇（％）"
        variant="outlined"
        density="compact"
        hide-details
      />
    </v-col>
    <v-col cols="6">
      <v-text-field
        :model-value="itemInfo.categorySpecificDetails.rgeDamageUp"
        @update:model-value="
          itemInfo.categorySpecificDetails.rgeDamageUp = Number($event)
        "
        type="number"
        label="射撃上昇（％）"
        variant="outlined"
        density="compact"
        hide-details
      />
    </v-col>
    <v-col cols="6">
      <v-text-field
        :model-value="itemInfo.categorySpecificDetails.techDamageUp"
        @update:model-value="
          itemInfo.categorySpecificDetails.techDamageUp = Number($event)
        "
        type="number"
        label="法撃上昇（％）"
        variant="outlined"
        density="compact"
        hide-details
      />
    </v-col>
    <v-col cols="6">
      <v-text-field
        :model-value="itemInfo.categorySpecificDetails.hpUp"
        @update:model-value="
          itemInfo.categorySpecificDetails.hpUp = Number($event)
        "
        type="number"
        label="ＨＰ上昇（％）"
        variant="outlined"
        density="compact"
        hide-details
      />
    </v-col>
    <v-col cols="6">
      <v-text-field
        :model-value="itemInfo.categorySpecificDetails.ppUp"
        @update:model-value="
          itemInfo.categorySpecificDetails.ppUp = Number($event)
        "
        type="number"
        label="ＰＰ上昇（％）"
        variant="outlined"
        density="compact"
        hide-details
      />
    </v-col>
    <v-spacer />
  </v-row>

  <!-- 防御上昇１ -->
  <v-row class="mt-8">
    <v-col cols="6">
      <v-text-field
        :model-value="itemInfo.categorySpecificDetails.damageResist"
        @update:model-value="
          itemInfo.categorySpecificDetails.damageResist = Number($event)
        "
        type="number"
        label="ダメージ耐性（％）"
        variant="outlined"
        density="compact"
        hide-details
      />
    </v-col>
    <v-col cols="6">
      <v-text-field
        :model-value="itemInfo.categorySpecificDetails.burnResist"
        @update:model-value="
          itemInfo.categorySpecificDetails.burnResist = Number($event)
        "
        type="number"
        label="炎耐性（％）"
        variant="outlined"
        density="compact"
        hide-details
      />
    </v-col>
    <v-col cols="6">
      <v-text-field
        :model-value="itemInfo.categorySpecificDetails.freezeResist"
        @update:model-value="
          itemInfo.categorySpecificDetails.freezeResist = Number($event)
        "
        type="number"
        label="氷耐性（％）"
        variant="outlined"
        density="compact"
        hide-details
      />
    </v-col>
    <v-col cols="6">
      <v-text-field
        :model-value="itemInfo.categorySpecificDetails.shockResist"
        @update:model-value="
          itemInfo.categorySpecificDetails.shockResist = Number($event)
        "
        type="number"
        label="雷耐性（％）"
        variant="outlined"
        density="compact"
        hide-details
      />
    </v-col>
    <v-col cols="6">
      <v-text-field
        :model-value="itemInfo.categorySpecificDetails.mirageResist"
        @update:model-value="
          itemInfo.categorySpecificDetails.mirageResist = Number($event)
        "
        type="number"
        label="風耐性（％）"
        variant="outlined"
        density="compact"
        hide-details
      />
    </v-col>
    <v-col cols="6">
      <v-text-field
        :model-value="itemInfo.categorySpecificDetails.panicResist"
        @update:model-value="
          itemInfo.categorySpecificDetails.panicResist = Number($event)
        "
        type="number"
        label="光耐性（％）"
        variant="outlined"
        density="compact"
        hide-details
      />
    </v-col>
    <v-col cols="6">
      <v-text-field
        :model-value="itemInfo.categorySpecificDetails.poisonResist"
        @update:model-value="
          itemInfo.categorySpecificDetails.poisonResist = Number($event)
        "
        type="number"
        label="闇耐性（％）"
        variant="outlined"
        density="compact"
        hide-details
      />
    </v-col>
    <v-col cols="6">
      <v-text-field
        :model-value="itemInfo.categorySpecificDetails.painResist"
        @update:model-value="
          itemInfo.categorySpecificDetails.painResist = Number($event)
        "
        type="number"
        label="ペイン耐性（％）"
        variant="outlined"
        density="compact"
        hide-details
      />
    </v-col>
    <v-col cols="6">
      <v-text-field
        :model-value="itemInfo.categorySpecificDetails.environmentResist"
        @update:model-value="
          itemInfo.categorySpecificDetails.environmentResist = Number($event)
        "
        type="number"
        label="環境耐性（％）"
        variant="outlined"
        density="compact"
        hide-details
      />
    </v-col>
    <v-spacer />
  </v-row>
</template>

<style scoped></style>
