import { ICommon } from 'types/i_common';

/**
 * interface 武器
 */
export interface IWeapon extends ICommon {
  categorySpecificDetails: IWeaponSpecificDetails; // 武器固有詳細
}

/**
 * interface 武器固有詳細
 */
interface IWeaponSpecificDetails {
  weaponType: string; // 武器種
  minAttack: number; // 最小攻撃力
  maxAttack: number; // 最大攻撃力
  criticalRate: number; // クリティカル率
  element: string; // 属性
  requiredLevel: number; // 必要レベル
  potential: number; // 潜在能力
}