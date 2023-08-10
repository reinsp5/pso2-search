
/**
 * interface 共通項目
 */
export interface ICommon {
  uuid: string; // uuid
  name: string; // アイテム名
  commonDetails: ICommonDetails; // 共通詳細
}

/**
 * interface 共通詳細項目
 */
interface ICommonDetails {
  description: string; // 説明
  category: string; // アイテムカテゴリ
  rarity: number; // レア度
  isTradable: boolean; // 取引可否
  hasColorVariation: boolean; // カラーバリエーション有無
  availability: string[]; // 入手場所
  tags: string[]; // タグ
}