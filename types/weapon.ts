import { IWeaponSpecificDetails } from "./interfaces/i_weapon";

export class WeaponSpecificDetails implements IWeaponSpecificDetails {
  weaponType: string;
  minAttack: number;
  maxAttack: number;
  criticalRate: number;
  element: string;
  requiredLevel: number;
  potential: string;

  constructor({
    weaponType = "",
    minAttack = 0,
    maxAttack = 0,
    criticalRate = 0,
    element = "",
    requiredLevel = 0,
    potential = "",
  }: {
    weaponType?: string;
    minAttack?: number;
    maxAttack?: number;
    criticalRate?: number;
    element?: string;
    requiredLevel?: number;
    potential?: string;
  } = {}) {
    this.weaponType = weaponType;
    this.minAttack = minAttack;
    this.maxAttack = maxAttack;
    this.criticalRate = criticalRate;
    this.element = element;
    this.requiredLevel = requiredLevel;
    this.potential = potential;
  }
}
