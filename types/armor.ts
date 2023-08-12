import { Common, CommonDetails } from "./common";
import { IArmor, IArmorSpecificDetails } from "./interfaces/i_armor";

export class Armor extends Common implements IArmor {
  categorySpecificDetails: ArmorSpecificDetails;
  constructor(name: string, commonDetails: CommonDetails) {
    super(name, commonDetails);
    this.categorySpecificDetails = new ArmorSpecificDetails();
  }
}

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
  constructor() {
    this.minDefence = 0;
    this.maxDefence = 0;
    this.strDamageUp = 0;
    this.rgeDamageUp = 0;
    this.techDamageUp = 0;
    this.hpUp = 0;
    this.ppUp = 0;
    this.damageResist = 0;
    this.burnResist = 0;
    this.freezeResist = 0;
    this.shockResist = 0;
    this.mirageResist = 0;
    this.panicResist = 0;
    this.poisonResist = 0;
    this.painResist = 0;
    this.environmentResist = 0;
    this.requiredLevel = 0;
  }
}
