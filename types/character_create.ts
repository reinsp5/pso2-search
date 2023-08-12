import { Common, CommonDetails } from "./common";
import {
  ICharacterCreate,
  ICharacterCreateSpecificDetails,
} from "./interfaces/i_character_create";
export class CharacterCreate extends Common implements ICharacterCreate {
  constructor(name: string, commonDetails: CommonDetails) {
    super(name, commonDetails);
    this.categorySpecificDetails = new CharacterCreateSpecificDetails();
  }
}

class CharacterCreateSpecificDetails
  implements ICharacterCreateSpecificDetails
{
  subCategory: string;
  colorSetting: string[];
  bodyType: string;
  constructor() {
    this.subCategory = "";
    this.colorSetting = [];
    this.bodyType = "";
  }
}
