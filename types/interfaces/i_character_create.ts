import { ICommon } from "./i_common";

export interface ICharacterCreate extends ICommon {
  categorySpecificDetails: ICharacterCreateSpecificDetails; // キャラクター作成固有詳細
}

export interface ICharacterCreateSpecificDetails {
  subCategory: string; // サブカテゴリ
  colorSetting: string[]; // カラー設定
  bodyType: string; // ボディタイプ
}