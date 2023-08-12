import { Common, CommonDetails } from "./common";
import {
  IMusicDisc,
  IMusicDiscSpecificDetails,
} from "./interfaces/i_music_disc";

export class MusicDisc extends Common implements IMusicDisc {
  categorySpecificDetails: MusicDiscSpecificDetails;
  constructor(name: string, commonDetails: CommonDetails) {
    super(name, commonDetails);
    this.categorySpecificDetails = new MusicDiscSpecificDetails();
  }
}

export class MusicDiscSpecificDetails implements IMusicDiscSpecificDetails {
  patterns: string[];
  constructor() {
    this.patterns = [];
  }
}
