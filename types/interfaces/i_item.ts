import { Timestamp } from "firebase/firestore";

export interface IItem<T> {
  uuid: string; // uuid
  name: string; // アイテム名
  commonDetails: ICommonDetails; // 共通詳細
  categorySpecificDetails: T; // カテゴリ詳細
  meta: IMeta; // メタ情報
}

/**
 * interface 共通詳細項目
 */
export interface ICommonDetails {
  description: string; // 説明
  category: string; // アイテムカテゴリ
  rarity: number; // レア度
  isTradable: boolean; // 取引可否
  isPso2Revived: boolean; // PSO2リバイバル対応
  hasColorVariation: boolean; // カラーバリエーション有無
  availability: string[]; // 入手場所
  tags: string[]; // タグ
  coverImage: ICoverImage; // カバー画像
}

export interface ICoverImage {
  id: string; // 画像ID
  url: string; // 画像URL
}

/**
 * interface メタ情報
 */
export interface IMeta {
  createdAt: Timestamp; // 作成日時
  createdUser: string; // 作成ユーザID
  updatedAt: Timestamp; // 更新日時
  updatedUser: string; // 更新ユーザID
}
