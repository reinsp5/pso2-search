import { IItem } from "./i_item";

export interface ICapsule extends IItem<ICapsuleSpecificDetails> {
  category: "能力カプセル"; // アイテムカテゴリ
}

/**
 * interface 能力カプセル固有詳細
 */
export interface ICapsuleSpecificDetails {
  damageUp: number; // 威力
  strDamageUp: number; // 打撃力
  rgeDamageUp: number; // 射撃力
  techDamageUp: number; // 法撃力
  hpUp: number; // HP
  ppUp: number; // PP
  damageCorrection: number; // ダメージ補正
  criticalRate: number; // クリティカル率
  damageResist: number; // ダメージ耐性
  elementResist: number; // 属性耐性
  environmentResist: number; // 環境耐性
  successRate: number; // 成功率
  strength: number; // 戦闘力
}
