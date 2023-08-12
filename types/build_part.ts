import { Common, CommonDetails } from "./common";
import { IBuildPart, IBuildPartSpecificDetails } from "./interfaces/i_build_part";

export class BuildPart extends Common implements IBuildPart {
  categorySpecificDetails: BuildPartSpecificDetails;
  constructor(name: string, commonDetails: CommonDetails) {
    super(name, commonDetails);
    this.categorySpecificDetails = new BuildPartSpecificDetails();
  }
}

export class BuildPartSpecificDetails implements IBuildPartSpecificDetails {
  subCategory: string;
  canScale: boolean;
  canRotate: boolean;
  canChangeColor: boolean;
  maxCount: number;
  canRegister: boolean;
  purchaseCost: number;
  constructor() {
    this.subCategory = "";
    this.canScale = false;
    this.canRotate = false;
    this.canChangeColor = false;
    this.maxCount = 0;
    this.canRegister = false;
    this.purchaseCost = 0;
  }
}