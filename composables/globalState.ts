import { Common, CommonDetails } from "@/types/common";
import { Item } from "@/types/item";
import { Armor } from "types/armor";
import { BuildPart } from "types/build_part";
import { MagForm } from "types/mag_form";
import { MusicDisc } from "types/music_disc";
import { Weapon } from "types/weapon";
import { WeaponSkin } from "types/weapon_skin";
/**************************************************
 * グローバルステート
 **************************************************/

// 登録中のアイテム情報
export const useInsertItemInfo = () => {
  return useState<Item>("insert-item-info", () => {
    return new Item();
  });
};

// 登録中のアイテム情報
export const useCreateItemInfo = () => {
  return useState<
    Armor | BuildPart | Common | MagForm | MusicDisc | Weapon | WeaponSkin
  >("create-item-info", () => {
    return new Common("", new CommonDetails());
  });
};
