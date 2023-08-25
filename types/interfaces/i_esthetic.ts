import { IItem } from "./i_item";

export interface IEsthetic extends IItem<IEstheticSpecificDetails> {
  category: "エステ"; // アイテムカテゴリ
}

export interface IEstheticSpecificDetails {
  subCategory: string; // サブカテゴリ
  colorSetting: string[]; // カラー設定
  bodyType: string; // ボディタイプ
}
