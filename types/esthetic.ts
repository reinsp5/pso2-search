import { Common, CommonDetails } from "./common";
import {
  IEsthetic,
  IEstheticSpecificDetails,
} from "./interfaces/i_esthetic";

export class Esthetic extends Common implements IEsthetic {
  categorySpecificDetails: EstheticSpecificDetails;
  constructor(name: string, commonDetails: CommonDetails) {
    super(name, commonDetails);
    this.categorySpecificDetails = new EstheticSpecificDetails();
  }
}

export class EstheticSpecificDetails
  implements IEstheticSpecificDetails
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
