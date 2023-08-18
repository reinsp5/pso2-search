import { ICommon } from "./i_common";

export interface IEsthetic extends ICommon {
  categorySpecificDetails: IEstheticSpecificDetails; // キャラクター作成固有詳細
}

export interface IEstheticSpecificDetails {
  subCategory: string; // サブカテゴリ
  colorSetting: string[]; // カラー設定
  bodyType: string; // ボディタイプ
}