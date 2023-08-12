<script lang="ts" setup>
const itemInfo = useCreateItemInfo();
const createItem = () => {
  console.log(itemInfo.value);
};
</script>

<template>
  <v-card>
    <v-form @submit.prevent="createItem">
      <v-row no-gutters align-stratch>
        <v-col cols="12" md="6" class="pa-2">
          <Name />
          <CategorySelector />
          <ItemMainImage />
          <Rarity />
          <CommonOptions />
        </v-col>
        <v-col cols="12" md="6" class="pa-2">
          <WeaponSpecificDetails
            v-if="itemInfo.commonDetails.category == '武器'"
          />
          <WeaponSkinSpecificDetails
            v-if="itemInfo.commonDetails.category == '武器迷彩'"
          />
          <ArmorSpecificDetails
            v-else-if="itemInfo.commonDetails.category == '防具'"
          />
          <MagFormSpecificDetails
            v-else-if="itemInfo.commonDetails.category == 'マグフォルム'"
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
