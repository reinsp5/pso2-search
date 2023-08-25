import {
  Timestamp,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  runTransaction,
  where,
} from "firebase/firestore";
import {
  AuthedUploadUrlResponse,
  DirectUploadUrlResponse,
} from "types/cloudflare";
import { Item } from "types/item";
import { MeiliResponse } from "types/meilisearch";
import { v4 as uuidv4 } from "uuid";

export const useItem = () => {
  // 検索処理
  const search = async (parms: any) => {
    const config = useRuntimeConfig();
    const { data } = await useFetch<MeiliResponse>(
      "https://search.reinsp5.com/indexes/pso2-items/search",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${config.public.meilisearchApiKey}`,
        },
        body: {
          ...parms,
        },
      }
    );

    return data.value?.hits.map((item) => Item.fromApiResponse(item)) ?? [];
  };

  // 登録処理
  const insert = async (item: Item<any>, imageLocalUrl: string) => {
    const { $auth, $store } = useNuxtApp();
    try {
      // <<トランザクション開始>>
      await runTransaction($store, async (_) => {
        // itemsコレクションを取得
        const querySnapshot = await getDocs(
          query(collection($store, "items"), where("name", "==", item.name))
        );
        // 既に登録されている場合はエラー
        if (!querySnapshot.empty) {
          throw new Error("既に登録されている武器です。");
        }

        // ユーザ情報を取得
        const user = $auth.currentUser;
        if (!user || !user.uid) {
          throw new Error(`ユーザ情報が取得できませんでした。`);
        }

        const userDoc = await getDoc(doc($store, "users", user.uid));
        if (!userDoc.exists()) {
          throw new Error("ユーザ情報が取得できませんでした。");
        }

        // CloudflareImages アップロード用URL取得
        const authedUrl = getUploadUrl();

        // 画像アップロード用のURLが取得できなかったらエラー
        if (!authedUrl || !authedUrl.success) {
          throw new Error(`画像アップロード用のURLが取得できませんでした。`);
        }

        // CloudflareImages へのアップロード
        const response = await fetch(imageLocalUrl);
        const fileBlob = await response.blob();
        const formData = new FormData();
        formData.append("file", fileBlob);
        const { data } = await useFetch<DirectUploadUrlResponse>(
          authedUrl.uploadURL,
          {
            method: "POST",
            body: formData,
          }
        );

        // 画像のアップロードが失敗したらエラー
        if (!data.value || !data.value!.success) {
          throw new Error(`画像のアップロードに失敗しました。`);
        }

        // ドキュメントを追加
        const docRef = await addDoc(collection($store, "items"), <Item<any>>{
          ...item,
          uuid: uuidv4(),
          meta: {
            createdAt: Timestamp.now(),
            createdUser: userDoc.get("displayName") ?? "unknown",
            updatedAt: Timestamp.now(),
            updatedUser: userDoc.get("displayName") ?? "unknown",
          },
          commonDetails: {
            ...item.commonDetails,
            coverImage: {
              id: data.value?.result.id ?? "",
              url: data.value
                ? `https://imagedelivery.net/y6deFg4uWz5Imy5sDx3EYA/${
                    data.value!.result.id
                  }/public`
                : "https://pso2-search.com/images/no_image.webp",
            },
          },
        });
      });
      // <<トランザクション終了>>
    } catch (e) {
      console.error(e);
    }
  };

  // CloudflareImages アップロード用URL取得
  const getUploadUrl = () => {
    const { data } = useFetch<AuthedUploadUrlResponse>("/api/get-upload-url", {
      method: "POST",
    });

    return data.value;
  };

  return {
    search,
    insert,
  };
};
