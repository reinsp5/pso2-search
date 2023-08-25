import { IBuildPartSpecificDetails } from "./interfaces/i_build_part";

export class BuildPartSpecificDetails implements IBuildPartSpecificDetails {
  subCategory: string;
  canScale: boolean;
  canRotate: boolean;
  canChangeColor: boolean;
  maxCount: number;
  canRegister: boolean;
  purchaseCost: number;

  constructor({
    subCategory = "",
    canScale = false,
    canRotate = false,
    canChangeColor = false,
    maxCount = 0,
    canRegister = false,
    purchaseCost = 0,
  }: {
    subCategory?: string;
    canScale?: boolean;
    canRotate?: boolean;
    canChangeColor?: boolean;
    maxCount?: number;
    canRegister?: boolean;
    purchaseCost?: number;
  } = {}) {
    this.subCategory = subCategory;
    this.canScale = canScale;
    this.canRotate = canRotate;
    this.canChangeColor = canChangeColor;
    this.maxCount = maxCount;
    this.canRegister = canRegister;
    this.purchaseCost = purchaseCost;
  }
}
