import { Armor } from "./armor";
import { BuildPart } from "./build_part";
import { Esthetic } from "./esthetic";
import { Common, CommonDetails } from "./common";
import { MagForm } from "./mag_form";
import { MusicDisc } from "./music_disc";
import { Weapon } from "./weapon";
import { WeaponSkin } from "./weapon_skin";
import { Wear } from "./wear";

export class ItemFactory {
  static createItem(name: string, commonDetails: CommonDetails) {
    switch (commonDetails.category) {
      case "武器":
        return new Weapon(name, commonDetails);
      case "防具":
        return new Armor(name, commonDetails);
      case "武器迷彩":
        return new WeaponSkin(name, commonDetails);
      case "エステ":
        return new Esthetic(name, commonDetails);
      case "ウェア":
        return new Wear(name, commonDetails);
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
