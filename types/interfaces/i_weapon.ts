import { IItem } from "./i_item";

export interface IWeapon extends IItem<IWeaponSpecificDetails> {
  category: "武器"; // アイテムカテゴリ
}

/**
 * interface 武器固有詳細
 */
export interface IWeaponSpecificDetails {
  weaponType: string; // 武器種
  minAttack: number; // 最小攻撃力
  maxAttack: number; // 最大攻撃力
  criticalRate: number; // クリティカル率
  element: string; // 属性
  requiredLevel: number; // 必要レベル
  potential: string; // 潜在能力
}
