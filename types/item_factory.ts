import { Armor } from "./armor";
import { BuildPart } from "./build_part";
import { Common, CommonDetails } from "./common";
import { MagForm } from "./mag_form";
import { MusicDisc } from "./music_disc";
import { Weapon } from "./weapon";
import { WeaponSkin } from "./weapon_skin";

export class ItemFactory {
  static createItem(name: string, commonDetails: CommonDetails) {
    switch (commonDetails.category) {
      case "武器":
        return new Weapon(name, commonDetails);
      case "防具":
        return new Armor(name, commonDetails);
      case "武器迷彩":
        return new WeaponSkin(name, commonDetails);
      case "キャラクタークリエイト":
        return new Common(name, commonDetails);
      case "クリエイティブスペース":
        return new BuildPart(name, commonDetails);
      case "消費アイテム":
        return new Common(name, commonDetails);
      case "素材アイテム":
        return new Common(name, commonDetails);
      case "マグフォルム":
        return new MagForm(name, commonDetails);
      case "ミュージックディスク":
        return new MusicDisc(name, commonDetails);
      case "その他":
        return new Common(name, commonDetails);
      default:
        return new Common(name, commonDetails);
    }
  }
}
