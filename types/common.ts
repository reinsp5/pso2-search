import { ICommon, ICommonDetails } from "types/interfaces/i_common";

/**
 * class 共通項目
 */
export class Common implements ICommon {
  uuid: string;
  name: string;
  commonDetails: ICommonDetails;
  categorySpecificDetails: any;

  constructor(name:string, commonDetails: CommonDetails) {
    this.uuid = "";
    this.name = name;
    this.commonDetails = commonDetails;
    this.categorySpecificDetails = null;
  }
  
}

/**
 * class 共通詳細項目
 */
export class CommonDetails implements ICommonDetails {
  description: string;
  category: string;
  rarity: number;
  isPso2Revived: boolean;
  isTradable: boolean;
  hasColorVariation: boolean;
  availability: string[];
  tags: string[];

  constructor() {
    this.description = "";
    this.category = "";
    this.rarity = 1;
    this.isPso2Revived = false;
    this.isTradable = false;
    this.hasColorVariation = false;
    this.availability = [];
    this.tags = [];
  }
}
