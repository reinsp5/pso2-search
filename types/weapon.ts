import { IWeapon, IWeaponSpecificDetails } from "@/types/interfaces/i_weapon";
import { Common, CommonDetails } from "./common";

export class Weapon extends Common implements IWeapon {
  categorySpecificDetails: IWeaponSpecificDetails;
  constructor(name: string, commonDetails: CommonDetails) {
    super(name, commonDetails);
    this.categorySpecificDetails = new WeaponSpecificDetails();
  }
}

export class WeaponSpecificDetails implements IWeaponSpecificDetails {
  weaponType: string;
  minAttack: number;
  maxAttack: number;
  criticalRate: number;
  element: string;
  requiredLevel: number;
  potentials: string[];
  constructor() {
    this.weaponType = "";
    this.minAttack = 0;
    this.maxAttack = 0;
    this.criticalRate = 0;
    this.element = "";
    this.requiredLevel = 0;
    this.potentials = [];
  }
}
