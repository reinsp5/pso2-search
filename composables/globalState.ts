import { Item } from "@/types/item";
/**************************************************
 * グローバルステート
 **************************************************/

// 登録中のアイテム情報
export const useInsertItemInfo = () => {
  return useState<Item<any>>("insert-item-info", () => {
    return new Item<any>();
  });
};

// 登録中のアイテム情報
export const useCreateItemInfo = () => {
  return useState<Item<any>>("create-item-info", () => {
    return new Item<any>();
  });
};
