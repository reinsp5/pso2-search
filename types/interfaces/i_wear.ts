
export interface IWear {
  categorySpecificDetails: IWearSpecificDetails // ウェア固有詳細
}

export interface IWearSpecificDetails {
  subCategory: string; // サブカテゴリ
  bodyType: string; // ボディタイプ
}