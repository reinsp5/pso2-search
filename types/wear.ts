import { IWearSpecificDetails } from "./interfaces/i_wear";

export class WearSpecificDetails implements IWearSpecificDetails {
  subCategory: string;
  bodyType: string;

  constructor({
    subCategory = "",
    bodyType = "",
  }: {
    subCategory?: string;
    bodyType?: string;
  } = {}) {
    this.subCategory = subCategory;
    this.bodyType = bodyType;
  }
}
