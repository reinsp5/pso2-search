/**
 * interface 共通項目
 */
export interface CommonDetails {
  description: string; // 説明
  category: string; // アイテムカテゴリ
  rarity: number; // レア度
  isTradable: boolean; // 取引可否
  hasColorVariation: boolean; // カラーバリエーション有無
  availability: string[]; // 入手場所
}