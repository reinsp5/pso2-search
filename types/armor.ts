import { CommonDetails } from "@/types/common_details";

/**
 * interface 防具
 */
export interface Armor {
  uuid: string; // uuid
  name: string; // 防具名
  commonDetails: CommonDetails; // 共通詳細
  categorySpecificDetails: ArmorSpecificDetails; // 防具固有詳細
}

/**
 * interface 防具固有詳細
 */
interface ArmorSpecificDetails {
  minDefence: number; // 最小防御力
  maxDefence: number; // 最大防御力
  strDamageUp: number; // 打撃力
  rgeDamageUp: number; // 射撃力
  techDamageUp: number; // 法撃力
  hpUp: number; // HP
  ppUp: number; // PP
  damageResist: number; // ダメージ軽減
  burnResist: number; // 炎属性耐性
  freezeResist: number; // 氷属性耐性
  shockResist: number; // 雷属性耐性
  mirageResist: number; // ミラージュ耐性
  panicResist: number; // パニック耐性
  poisonResist: number; // 毒属性耐性
  painResist: number; // ペイン耐性
  requiredLevel: number; // 必要レベル
}
