import { IMusicDiscSpecificDetails } from "./interfaces/i_music_disc";

export class MusicDiscSpecificDetails implements IMusicDiscSpecificDetails {
  patterns: string[];

  constructor({
    patterns = [],
  }: {
    patterns?: string[];
  } = {}) {
    this.patterns = patterns;
  }
}
