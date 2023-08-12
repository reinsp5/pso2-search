import { ICommon } from "types/interfaces/i_common";

/**
 * interface ミュージックディスク
 */
export interface IMusicDisc extends ICommon {
  categorySpecificDetails: IMusicDiscSpecificDetails; // ミュージックディスク固有詳細
}

/**
 * interface ミュージックディスク固有詳細
 */
export interface IMusicDiscSpecificDetails {
  patterns: string[]; // 再生可能
}