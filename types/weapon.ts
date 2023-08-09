import { CommonDetails } from '@/types/common_details';

/**
 * interface 武器
 */
export interface Weapon {
  uuid: string; // uuid
  name: string; // 武器名
  commonDetails: CommonDetails; // 共通詳細
  categorySpecificDetails: WeaponSpecificDetails; // 武器固有詳細
}

/**
 * interface 武器固有詳細
 */
interface WeaponSpecificDetails {
  weaponType: string; // 武器種
  minAttack: number; // 最小攻撃力
  maxAttack: number; // 最大攻撃力
  criticalRate: number; // クリティカル率
  element: string; // 属性
  requiredLevel: number; // 必要レベル
  potential: number; // 潜在能力
}