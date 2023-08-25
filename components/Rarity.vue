<script lang="ts" setup>
const props = defineProps({
  rarity: {
    type: Number,
    required: true,
  },
});
const stars = Array(props.rarity).fill("★");

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
</script>

<template>
  <span
    v-for="(star, index) in stars"
    :key="index"
    :class="`text-${getClass(index)}`"
  >
    {{ star }}
  </span>
  <span>
    {{ `（${props.rarity}）` }}
  </span>
</template>

<style scoped></style>
