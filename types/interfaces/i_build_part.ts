import { ICommon } from "types/interfaces/i_common";

/**
 * interface ビルドパーツ
 */
export interface IBuildPart extends ICommon {
  categorySpecificDetails: IBuildPartSpecificDetails; // ビルドパーツ固有詳細
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