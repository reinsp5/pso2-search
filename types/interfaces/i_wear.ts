import { IItem } from "./i_item";

export interface IWear extends IItem<IWearSpecificDetails> {
  category: "ウェア"; // アイテムカテゴリ
}

export interface IWearSpecificDetails {
  subCategory: string; // サブカテゴリ
  bodyType: string; // ボディタイプ
}
