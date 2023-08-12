import { Common, CommonDetails } from "./common";
import {
  IWeaponSkin,
  IWeaponSkinSpecificDetails,
} from "./interfaces/i_weapon_skin";

/**
 * class 武器明細
 */
export class WeaponSkin extends Common implements IWeaponSkin {
  categorySpecificDetails: WeaponSkinSpecificDetails;
  constructor(name: string, commonDetails: CommonDetails) {
    super(name, commonDetails);
    this.categorySpecificDetails = new WeaponSkinSpecificDetails();
    this.uuid = "";
    this.name = "";
  }
}

/**
 * class 武器明細
 */
export class WeaponSkinSpecificDetails implements IWeaponSkinSpecificDetails {
  canSword: boolean;
  canPartisan: boolean;
  canWiredLance: boolean;
  canTwinDagger: boolean;
  canDoubleSaber: boolean;
  canKnuckle: boolean;
  canKatana: boolean;
  canDualBlade: boolean;
  canAssaultRifle: boolean;
  canLauncher: boolean;
  canTwinMachinegun: boolean;
  canBulletBow: boolean;
  canGunslash: boolean;
  canRod: boolean;
  canTalis: boolean;
  canWand: boolean;
  canJetBoots: boolean;
  canTakt: boolean;

  constructor() {
    this.canSword = false;
    this.canPartisan = false;
    this.canWiredLance = false;
    this.canTwinDagger = false;
    this.canDoubleSaber = false;
    this.canKnuckle = false;
    this.canKatana = false;
    this.canDualBlade = false;
    this.canAssaultRifle = false;
    this.canLauncher = false;
    this.canTwinMachinegun = false;
    this.canBulletBow = false;
    this.canGunslash = false;
    this.canRod = false;
    this.canTalis = false;
    this.canWand = false;
    this.canJetBoots = false;
    this.canTakt = false;
  }

  allWeaponTrue() {
    this.canSword = true;
    this.canPartisan = true;
    this.canWiredLance = true;
    this.canTwinDagger = true;
    this.canDoubleSaber = true;
    this.canKnuckle = true;
    this.canKatana = true;
    this.canDualBlade = true;
    this.canAssaultRifle = true;
    this.canLauncher = true;
    this.canTwinMachinegun = true;
    this.canBulletBow = true;
    this.canGunslash = true;
    this.canRod = true;
    this.canTalis = true;
    this.canWand = true;
    this.canJetBoots = true;
    this.canTakt = true;
  }

  allWeaponFalse() {
    this.canSword = false;
    this.canPartisan = false;
    this.canWiredLance = false;
    this.canTwinDagger = false;
    this.canDoubleSaber = false;
    this.canKnuckle = false;
    this.canKatana = false;
    this.canDualBlade = false;
    this.canAssaultRifle = false;
    this.canLauncher = false;
    this.canTwinMachinegun = false;
    this.canBulletBow = false;
    this.canGunslash = false;
    this.canRod = false;
    this.canTalis = false;
    this.canWand = false;
    this.canJetBoots = false;
    this.canTakt = false;
  }
}
