import { IItem } from "./i_item";

export interface IWeaponSkin extends IItem<IWeaponSkinSpecificDetails> {
  category: "武器迷彩"; // アイテムカテゴリ
}

/**
 * interface 武器固有詳細
 */
export interface IWeaponSkinSpecificDetails {
  canSword: boolean; // ソード
  canPartisan: boolean; // パルチザン
  canWiredLance: boolean; // ワイヤードランス
  canTwinDagger: boolean; // ツインダガー
  canDoubleSaber: boolean; // ダブルセイバー
  canKnuckle: boolean; // ナックル
  canKatana: boolean; // カタナ
  canDualBlade: boolean; // デュアルブレード
  canAssaultRifle: boolean; // アサルトライフル
  canLauncher: boolean; // ランチャー
  canTwinMachinegun: boolean; // ツインマシンガン
  canBulletBow: boolean; // バレットボウ
  canGunslash: boolean; // ガンスラッシュ
  canRod: boolean; // ロッド
  canTalis: boolean; // タリス
  canWand: boolean; // ウォンド
  canJetBoots: boolean; // ジェットブーツ
  canTakt: boolean; // タクト
}
