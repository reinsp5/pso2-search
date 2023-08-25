import { IItem } from "./i_item";

export interface IMusicDisc extends IItem<IMusicDiscSpecificDetails> {
  category: "ミュージックディスク"; // アイテムカテゴリ
}

/**
 * interface ミュージックディスク固有詳細
 */
export interface IMusicDiscSpecificDetails {
  patterns: string[]; // 再生可能
}
