import { Common, CommonDetails } from "./common";
import { IMagForm, IMagFormSpecificDetails } from "./interfaces/i_mag_form";

export class MagForm extends Common implements IMagForm {
  categorySpecificDetails: MagFormSpecificDetails;
  constructor(name: string, commonDetails: CommonDetails) {
    super(name, commonDetails);
    this.categorySpecificDetails = new MagFormSpecificDetails();
  }
}

export class MagFormSpecificDetails implements IMagFormSpecificDetails {
  canChangeColor: boolean;
  constructor() {
    this.canChangeColor = false;
  }
}
