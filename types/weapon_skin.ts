import { IWeaponSkinSpecificDetails } from "./interfaces/i_weapon_skin";

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

  constructor({
    canSword = false,
    canPartisan = false,
    canWiredLance = false,
    canTwinDagger = false,
    canDoubleSaber = false,
    canKnuckle = false,
    canKatana = false,
    canDualBlade = false,
    canAssaultRifle = false,
    canLauncher = false,
    canTwinMachinegun = false,
    canBulletBow = false,
    canGunslash = false,
    canRod = false,
    canTalis = false,
    canWand = false,
    canJetBoots = false,
    canTakt = false,
  }: {
    canSword?: boolean;
    canPartisan?: boolean;
    canWiredLance?: boolean;
    canTwinDagger?: boolean;
    canDoubleSaber?: boolean;
    canKnuckle?: boolean;
    canKatana?: boolean;
    canDualBlade?: boolean;
    canAssaultRifle?: boolean;
    canLauncher?: boolean;
    canTwinMachinegun?: boolean;
    canBulletBow?: boolean;
    canGunslash?: boolean;
    canRod?: boolean;
    canTalis?: boolean;
    canWand?: boolean;
    canJetBoots?: boolean;
    canTakt?: boolean;
  } = {}) {
    this.canSword = canSword;
    this.canPartisan = canPartisan;
    this.canWiredLance = canWiredLance;
    this.canTwinDagger = canTwinDagger;
    this.canDoubleSaber = canDoubleSaber;
    this.canKnuckle = canKnuckle;
    this.canKatana = canKatana;
    this.canDualBlade = canDualBlade;
    this.canAssaultRifle = canAssaultRifle;
    this.canLauncher = canLauncher;
    this.canTwinMachinegun = canTwinMachinegun;
    this.canBulletBow = canBulletBow;
    this.canGunslash = canGunslash;
    this.canRod = canRod;
    this.canTalis = canTalis;
    this.canWand = canWand;
    this.canJetBoots = canJetBoots;
    this.canTakt = canTakt;
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
