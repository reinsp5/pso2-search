import { ICapsuleSpecificDetails } from "./interfaces/i_capsule";

export class CapsuleSpecificDetails implements ICapsuleSpecificDetails {
  damageUp: number;
  strDamageUp: number;
  rgeDamageUp: number;
  techDamageUp: number;
  hpUp: number;
  ppUp: number;
  damageCorrection: number;
  criticalRate: number;
  damageResist: number;
  elementResist: number;
  environmentResist: number;
  successRate: number;
  strength: number;

  constructor({
    damageUp = 0,
    strDamageUp = 0,
    rgeDamageUp = 0,
    techDamageUp = 0,
    hpUp = 0,
    ppUp = 0,
    damageCorrection = 0,
    criticalRate = 0,
    damageResist = 0,
    elementResist = 0,
    environmentResist = 0,
    successRate = 0,
    strength = 0,
  }: {
    damageUp?: number;
    strDamageUp?: number;
    rgeDamageUp?: number;
    techDamageUp?: number;
    hpUp?: number;
    ppUp?: number;
    damageCorrection?: number;
    criticalRate?: number;
    damageResist?: number;
    elementResist?: number;
    environmentResist?: number;
    successRate?: number;
    strength?: number;
  } = {}) {
    this.damageUp = damageUp;
    this.strDamageUp = strDamageUp;
    this.rgeDamageUp = rgeDamageUp;
    this.techDamageUp = techDamageUp;
    this.hpUp = hpUp;
    this.ppUp = ppUp;
    this.damageCorrection = damageCorrection;
    this.criticalRate = criticalRate;
    this.damageResist = damageResist;
    this.elementResist = elementResist;
    this.environmentResist = environmentResist;
    this.successRate = successRate;
    this.strength = strength;
  }
}
