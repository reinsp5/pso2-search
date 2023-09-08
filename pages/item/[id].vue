<script lang="ts" setup>
import { mdiCheckCircle, mdiCloseCircle, mdiFileEditOutline } from "@mdi/js";
import { doc } from "firebase/firestore";
import { Item } from "@/types/item";
// const config = useRuntimeConfig();

const { isAuthed } = useAuth();

// URLからアイテムのUUIDを取得
const itemUid = useRoute().params.id as string;
const { search } = useItem();
const parms = {
  filter: `uuid = ${itemUid}`,
};
const response = await search(parms);
const itemInfo = useCreateItemInfo();
itemInfo.value = response[0];

const stars = Array(itemInfo.value.commonDetails.rarity).fill("★");
const getClass = (index: number) => {
  // 3つごとに色を変える
  if (index < 3) {
    return "blue";
  } else if (index < 6) {
    return "green";
  } else if (index < 9) {
    return "red";
  } else if (index < 12) {
    return "blue-grey-lighten-1";
  } else if (index < 14) {
    return "amber";
  } else {
    return "purple";
  }
};

useHead({
  title: `${itemInfo.value.name} | PSO2 Search Unofficial Item Search Engine`,
});
</script>

<template>
  <ItemView :itemInfo="itemInfo" />
</template>

<style></style>
