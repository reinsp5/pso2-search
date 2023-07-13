<script lang="ts" setup>
import { doc, getDoc, runTransaction, Timestamp } from "firebase/firestore";
import type { VForm } from "vuetify/lib/components/index.mjs";
import { Item } from "@/types/item";
import { DirectUploadUrlResponse } from "@/types/cloudflare";

// 認証必須
definePageMeta({
  middleware: ["auth"],
});

// 入力情報の共有State
const itemInfo = useInsertItemInfo();

const config = useRuntimeConfig();

// URLクエリからアイテムIDを取得
const itemId = useRoute().params.id as string;
const docUid = ref("");

// アイテム情報の取得
const itemDoc = async () => {
  const { search, parms } = useSearch();
  parms.value = {
    filter: `id = ${itemId}`,
  };
  const response = await search();
  docUid.value = response!.hits[0]._firestore_id;
  itemInfo.value = new Item().mapItem(response!.hits[0]) || new Item();
};

await itemDoc();

// アイテムフォーム
const itemCreateForm = ref<VForm | null>(null);
const images = useState<File[]>("preview-images");

// ローディング
const loading = ref(false);

// 登録する
const createItem = async () => {
  loading.value = true;
  if (!itemCreateForm.value) {
    loading.value = false;
    return;
  }
  // バリデーション
  const isValid = await itemCreateForm.value.validate();
  if (!isValid.valid) {
    loading.value = false;
    return;
  }

  // イメージURL
  const previewUrl = useState<string>("preview-url", () => "");

  // 画像が選択されている場合はアップロード
  const upload = ref<DirectUploadUrlResponse>();
  if (previewUrl.value != "") {
    // 画像アップロード用のURLを取得
    const { getUploadUrl } = useImageUpload();
    const uploadUrl = getUploadUrl();

    // 画像アップロード用のURLが取得できなかったらエラー
    if (!uploadUrl) {
      loading.value = false;
      return;
    } else if (!uploadUrl.success) {
      loading.value = false;
      return;
    }

    // 画像をアップロード
    const response = await fetch(previewUrl.value);
    const fileBlob = await response.blob();
    const formData = new FormData();
    formData.append("file", fileBlob);
    const { data } = await useFetch<DirectUploadUrlResponse>(
      uploadUrl.uploadURL,
      {
        method: "POST",
        body: formData,
      }
    );

    // 画像のアップロードが失敗したらエラー
    if (!data.value) {
      throw new Error("画像のアップロードに失敗しました。");
    } else if (!data.value!.success) {
      throw new Error("画像のアップロードに失敗しました。");
    }

    upload.value = data.value;
  }

  const { $store, $auth } = useNuxtApp();
  const updateDocRef = doc($store, "items", docUid.value);
  try {
    // <<トランザクション開始>>
    await runTransaction($store, async (transaction) => {
      // 更新対象のドキュメントを取得する
      const sfDoc = await transaction.get(updateDocRef);

      // 既に登録されている場合はエラー
      if (!sfDoc.exists()) {
        throw new Error("アイテムが存在しません！");
      }

      // ユーザ情報を取得
      const user = $auth.currentUser;
      if (!user) {
        throw new Error("ユーザ情報が取得できませんでした。");
      } else if (!user.uid) {
        throw new Error("ユーザ情報が取得できませんでした。");
      }
      const userDoc = await getDoc(doc($store, "users", user.uid));
      if (!userDoc.exists()) {
        throw new Error("ユーザ情報が取得できませんでした。");
      }

      console.log(itemInfo.value);
      let updateItem = {
        ...itemInfo.value.toJSON(),
        update_user: userDoc.get("displayName") ?? "unknown",
        updated_at: Timestamp.now(),
      };

      // 画像がアップロードされている場合は画像URLを更新
      if (upload.value) {
        updateItem.cover_image_url = {
          id: upload.value.result.id,
          url: `https://imagedelivery.net/y6deFg4uWz5Imy5sDx3EYA/${upload.value.result.id}/public`,
        };
      }

      // ドキュメントを更新する
      transaction.update(updateDocRef, updateItem);
    });
    // <<トランザクション終了>>

    // フォームをリセット
    itemCreateForm.value.reset();
    itemInfo.value = new Item();
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
    }
  } finally {
    loading.value = false;
  }
};

useHead({
  title: "アイテム情報編集 | PSO2 Search Unofficial Item Search Engine",
});
</script>

<template>
  <v-container class="h-100">
    <v-row class="h-100" align="center">
      <v-col>
        <v-card class="mx-auto" variant="flat" max-width="720">
          <v-card-title class="d-flex align-center justify-center text-h5">
            アイテム編集
          </v-card-title>
          <v-form
            ref="itemCreateForm"
            validate-on="input"
            @submit.prevent="createItem"
          >
            <v-row no-gutters>
              <v-col>
                <v-img :src="itemInfo.cover_image_url.url" />
              </v-col>
              <!-- 共通項目 -->
              <ItemNameField />
              <ItemMainImage />
              <ItemCategorySelector />
              <ItemSubCategorySelector />
              <ItemRarity />
              <TradeableSwitch />
              <Pso2RevivalSwitch />
              <AvailableField />
              <TagsField />

              <!-- 個別項目 -->
              <ElementSelector />
              <PotentialSelector />
              <ColorVariantSwitch />
              <SpecialAbilitySelector />
              <RequirementFields />

              <!-- 武器 -->
              <WeaponTypeSelector />
              <AtkPowerField />

              <!-- 防具 -->
              <DefPowerField />
              <AttributeFields />

              <!-- 武器迷彩 -->
              <MountableWeaponTypesSelector />
            </v-row>
            <v-card-actions>
              <v-btn
                :loading="loading"
                class="text-none mt-8"
                color="blue-darken-4"
                size="x-large"
                variant="flat"
                type="submit"
                block
              >
                編集する
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
