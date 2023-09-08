<script lang="ts" setup>
const itemInfo = useCreateItemInfo();
const createItem = async () => {
  console.log(itemInfo.value);
  const { insert } = useItem();
  await insert(itemInfo.value, "");
};
</script>

<template>
  <v-card>
    <v-form @submit.prevent="createItem">
      <v-row no-gutters align-stratch>
        <v-col cols="12" md="6" class="pa-4">
          <Name />
          <CategorySelector />
          <ItemMainImage />
          <RaritySelector />
          <CommonOptions />
        </v-col>
        <v-col cols="12" md="6" class="px-4">
          <ArmorSpecificDetails
            v-if="itemInfo.commonDetails.category == '防具'"
          />
          <BuildPartSpecificDetails
            v-else-if="
              itemInfo.commonDetails.category == 'クリエイティブスペース'
            "
          />
          <MusicDiscSpecificDetails
            v-else-if="
              itemInfo.commonDetails.category == 'ミュージックディスク'
            "
          />
          <WeaponSpecificDetails
            v-else-if="itemInfo.commonDetails.category == '武器'"
          />
          <WeaponSkinSpecificDetails
            v-else-if="itemInfo.commonDetails.category == '武器迷彩'"
          />
          <MagFormSpecificDetails
            v-else-if="itemInfo.commonDetails.category == 'マグフォルム'"
          />
          <EstheticSpecificDetails
            v-else-if="itemInfo.commonDetails.category == 'エステ'"
          />
          <WearSpecificDetails
            v-else-if="itemInfo.commonDetails.category == 'ウェア'"
          />
          <Availability />
          <Tags />
          <CreateButton />
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>

<style scoped></style>
