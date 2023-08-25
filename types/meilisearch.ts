import { IItem } from "./interfaces/i_item";

export interface MeiliResponse {
  hits: MeiliIndex[];
  query: string;
}

export interface MeiliIndex extends IItem<any> {
  _firestore_id: string;
}
