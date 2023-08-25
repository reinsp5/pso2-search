import { IArmorSpecificDetails } from "./interfaces/i_armor";

export class ArmorSpecificDetails implements IArmorSpecificDetails {
  minDefence: number;
  maxDefence: number;
  strDamageUp: number;
  rgeDamageUp: number;
  techDamageUp: number;
  hpUp: number;
  ppUp: number;
  damageResist: number;
  burnResist: number;
  freezeResist: number;
  shockResist: number;
  mirageResist: number;
  panicResist: number;
  poisonResist: number;
  painResist: number;
  environmentResist: number;
  requiredLevel: number;

  constructor({
    minDefence = 0,
    maxDefence = 0,
    strDamageUp = 0,
    rgeDamageUp = 0,
    techDamageUp = 0,
    hpUp = 0,
    ppUp = 0,
    damageResist = 0,
    burnResist = 0,
    freezeResist = 0,
    shockResist = 0,
    mirageResist = 0,
    panicResist = 0,
    poisonResist = 0,
    painResist = 0,
    environmentResist = 0,
    requiredLevel = 0,
  }: {
    minDefence?: number;
    maxDefence?: number;
    strDamageUp?: number;
    rgeDamageUp?: number;
    techDamageUp?: number;
    hpUp?: number;
    ppUp?: number;
    damageResist?: number;
    burnResist?: number;
    freezeResist?: number;
    shockResist?: number;
    mirageResist?: number;
    panicResist?: number;
    poisonResist?: number;
    painResist?: number;
    environmentResist?: number;
    requiredLevel?: number;
  } = {}) {
    this.minDefence = minDefence;
    this.maxDefence = maxDefence;
    this.strDamageUp = strDamageUp;
    this.rgeDamageUp = rgeDamageUp;
    this.techDamageUp = techDamageUp;
    this.hpUp = hpUp;
    this.ppUp = ppUp;
    this.damageResist = damageResist;
    this.burnResist = burnResist;
    this.freezeResist = freezeResist;
    this.shockResist = shockResist;
    this.mirageResist = mirageResist;
    this.panicResist = panicResist;
    this.poisonResist = poisonResist;
    this.painResist = painResist;
    this.environmentResist = environmentResist;
    this.requiredLevel = requiredLevel;
  }
}
