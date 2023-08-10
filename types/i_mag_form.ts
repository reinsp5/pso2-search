import { ICommon } from "./i_common";

/**
 * interface マグフォルム
 */
export interface IMagForm extends ICommon {
  categorySpecificDetails: IMagFormSpecificDetails; // マグフォルム固有詳細
}

/**
 * interface マグフォルム固有詳細
 */
interface IMagFormSpecificDetails {
  canChangeColor: boolean; // カラーチェンジ可否
}