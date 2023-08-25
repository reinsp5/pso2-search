import { IEstheticSpecificDetails } from "./interfaces/i_esthetic";

export class EstheticSpecificDetails implements IEstheticSpecificDetails {
  subCategory: string;
  colorSetting: string[];
  bodyType: string;

  constructor({
    subCategory = "",
    colorSetting = [],
    bodyType = "",
  }: {
    subCategory?: string;
    colorSetting?: string[];
    bodyType?: string;
  } = {}) {
    this.subCategory = subCategory;
    this.colorSetting = colorSetting;
    this.bodyType = bodyType;
  }
}
