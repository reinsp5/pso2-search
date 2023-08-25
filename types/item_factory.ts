import { Timestamp } from "firebase/firestore";
import { ICommonDetails, IItem, IMeta } from "./interfaces/i_item";
import { MeiliResponse } from "./meilisearch";

export class Item<T> implements IItem<T> {
  uuid: string;
  name: string;
  commonDetails: ICommonDetails;
  categorySpecificDetails: T;
  meta: IMeta;

  constructor({
    uuid = "",
    name = "",
    commonDetails = new CommonDetails(),
    categorySpecificDetails = <T>{},
    meta = new Meta(),
  }: {
    uuid?: string;
    name?: string;
    commonDetails?: ICommonDetails;
    categorySpecificDetails?: T;
    meta?: IMeta;
  } = {}) {
    this.uuid = uuid;
    this.name = name;
    this.commonDetails = commonDetails;
    this.categorySpecificDetails = categorySpecificDetails;
    this.meta = meta;
  }
  
  static fromApiResponse(response: MeiliResponse): Item<T> {
    const 
  }
}

class CommonDetails implements ICommonDetails {
  description: string;
  category: string;
  rarity: number;
  isTradable: boolean;
  isPso2Revived: boolean;
  hasColorVariation: boolean;
  availability: string[];
  tags: string[];

  constructor({
    description = "",
    category = "",
    rarity = 1,
    isTradable = false,
    isPso2Revived = false,
    hasColorVariation = false,
    availability = [],
    tags = [],
  }: {
    description?: string;
    category?: string;
    rarity?: number;
    isTradable?: boolean;
    isPso2Revived?: boolean;
    hasColorVariation?: boolean;
    availability?: string[];
    tags?: string[];
  } = {}) {
    this.description = description;
    this.category = category;
    this.rarity = rarity;
    this.isTradable = isTradable;
    this.isPso2Revived = isPso2Revived;
    this.hasColorVariation = hasColorVariation;
    this.availability = availability;
    this.tags = tags;
  }
}

class Meta implements IMeta {
  createDateTime: Timestamp;
  createUserId: string;
  updateDateTime: Timestamp;
  updateUserId: string;

  constructor({
    createDateTime = Timestamp.now(),
    createUserId = "",
    updateDateTime = Timestamp.now(),
    updateUserId = "",
  }: {
    createDateTime?: Timestamp;
    createUserId?: string;
    updateDateTime?: Timestamp;
    updateUserId?: string;
  } = {}) {
    this.createDateTime = createDateTime;
    this.createUserId = createUserId;
    this.updateDateTime = updateDateTime;
    this.updateUserId = updateUserId;
  }
}
