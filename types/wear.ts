import { CommonDetails } from "@/types/common";
import { Common } from "./common";
import { IWear, IWearSpecificDetails } from "./interfaces/i_wear";

export class Wear extends Common implements IWear {
  categorySpecificDetails: WearSpecificDetails;
  constructor(name: string, commonDetails: CommonDetails) {
    super(name, commonDetails);
    this.categorySpecificDetails = new WearSpecificDetails();
  }
}

export class WearSpecificDetails implements IWearSpecificDetails {
  subCategory: string;
  bodyType: string;
  constructor() {
    this.subCategory = "";
    this.bodyType = "";
  }
}
