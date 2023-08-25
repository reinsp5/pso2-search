import { IItem } from "./i_item";

export interface IBuildPart extends IItem<IBuildPartSpecificDetails> {
  category: "クリエイティブ・スペース";
}

/**
 * interface ビルドパーツ固有詳細
 */
export interface IBuildPartSpecificDetails {
  subCategory: string; // サブカテゴリ
  canScale: boolean; // スケール
  canRotate: boolean; // 回転
  canChangeColor: boolean; // カラーチェンジ
  maxCount: number; // 最大数
  canRegister: boolean; // 登録可否
  purchaseCost: number; // 購入コスト（GP:ジェネシスポイント）
}
