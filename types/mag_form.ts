import { IMagFormSpecificDetails } from "./interfaces/i_mag_form";

export class MagFormSpecificDetails implements IMagFormSpecificDetails {
  canChangeColor: boolean;

  constructor({
    canChangeColor = false,
  }: {
    canChangeColor?: boolean;
  } = {}) {
    this.canChangeColor = canChangeColor;
  }
}
