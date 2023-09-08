<script lang="ts" setup>
import { Item } from "@/types/item";
import { mdiFileEditOutline } from "@mdi/js";

// Propsの定義
const props = defineProps({
  itemInfo: {
    type: Item<any>,
    required: true,
  },
});

// URLからアイテムのUUIDを取得
const itemUid = useRoute().params.id as string;

const { isAuthed } = useAuth();
</script>

<template>
  <v-container class="h-100 d-flex justify-center align-center">
    <v-card class="pa-4" max-width="960" variant="outlined">
      <v-card-title class="d-flex align-center justify-center">
        <span class="text-body-1 text-md-h5 font-weight-bold">
          {{ props.itemInfo.name }}
        </span>
      </v-card-title>
      <v-row class="text-caption text-md-h6" align="center" no-gutters>
        <CommonView :commonDetails="props.itemInfo.commonDetails" />
        <WeaponSpecificView v-if="typeof itemInfo.categorySpecificDetails === 'WeaponSpecificDetails'" />
      </v-row>
      <v-card-actions v-if="isAuthed">
        <v-row no-gutters>
          <v-col align="end">
            <v-btn
              variant="flat"
              :prepend-icon="mdiFileEditOutline"
              :to="`/item/edit/${itemUid}`"
            >
              編集する
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<style scoped></style>
