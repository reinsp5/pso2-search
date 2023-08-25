import { IItem } from "./i_item";

export interface IMagForm extends IItem<IMagFormSpecificDetails> {
  category: "マグフォルム"; // アイテムカテゴリ
}

/**
 * interface マグフォルム固有詳細
 */
export interface IMagFormSpecificDetails {
  canChangeColor: boolean; // カラーチェンジ可否
}
