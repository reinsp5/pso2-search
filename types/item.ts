import { Timestamp } from "firebase/firestore";
import { ICommonDetails, ICoverImage, IItem, IMeta } from "./interfaces/i_item";
import { MeiliIndex, MeiliResponse } from "./meilisearch";
import { ArmorSpecificDetails } from "./armor";
import { WeaponSpecificDetails } from "./weapon";
import { BuildPartSpecificDetails } from "./build_part";
import { CapsuleSpecificDetails } from "./capsule";
import { EstheticSpecificDetails } from "./esthetic";
import { MagFormSpecificDetails } from "./mag_form";
import { WearSpecificDetails } from "./wear";

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

  static fromApiResponse(data: MeiliIndex): Item<any> {
    const commonDetails = new CommonDetails(data.commonDetails);
    const meta = new Meta(data.meta);
    switch (commonDetails.category) {
      case "防具":
        return new Item({
          uuid: data.uuid,
          name: data.name,
          commonDetails: commonDetails,
          categorySpecificDetails: new ArmorSpecificDetails(
            data.categorySpecificDetails
          ),
          meta: meta,
        });
      case "武器":
        return new Item({
          uuid: data.uuid,
          name: data.name,
          commonDetails: commonDetails,
          categorySpecificDetails: new WeaponSpecificDetails(
            data.categorySpecificDetails
          ),
          meta: meta,
        });
      case "クリエイティブ・スペース":
        return new Item({
          uuid: data.uuid,
          name: data.name,
          commonDetails: commonDetails,
          categorySpecificDetails: new BuildPartSpecificDetails(
            data.categorySpecificDetails
          ),
          meta: meta,
        });
      case "能力追加カプセル":
        return new Item({
          uuid: data.uuid,
          name: data.name,
          commonDetails: commonDetails,
          categorySpecificDetails: new CapsuleSpecificDetails(
            data.categorySpecificDetails
          ),
          meta: meta,
        });
      case "エステ":
        return new Item({
          uuid: data.uuid,
          name: data.name,
          commonDetails: commonDetails,
          categorySpecificDetails: new EstheticSpecificDetails(
            data.categorySpecificDetails
          ),
          meta: meta,
        });
      case "マグフォルム":
        return new Item({
          uuid: data.uuid,
          name: data.name,
          commonDetails: commonDetails,
          categorySpecificDetails: new MagFormSpecificDetails(
            data.categorySpecificDetails
          ),
          meta: meta,
        });
      case "ミュージックディスク":
        return new Item({
          uuid: data.uuid,
          name: data.name,
          commonDetails: commonDetails,
          categorySpecificDetails: new MagFormSpecificDetails(
            data.categorySpecificDetails
          ),
          meta: meta,
        });
      case "武器迷彩":
        return new Item({
          uuid: data.uuid,
          name: data.name,
          commonDetails: commonDetails,
          categorySpecificDetails: new WeaponSpecificDetails(
            data.categorySpecificDetails
          ),
          meta: meta,
        });
      case "ウェア":
        return new Item({
          uuid: data.uuid,
          name: data.name,
          commonDetails: commonDetails,
          categorySpecificDetails: new WearSpecificDetails(
            data.categorySpecificDetails
          ),
          meta: meta,
        });
      default:
        throw new Error("Invalid category");
    }
  }

  toJSON(item: Item<any>): string {
    return JSON.stringify(item);
  }
}

export class CommonDetails implements ICommonDetails {
  description: string;
  category: string;
  rarity: number;
  isTradable: boolean;
  isPso2Revived: boolean;
  hasColorVariation: boolean;
  availability: string[];
  tags: string[];
  coverImage: CoverImage;

  constructor({
    description = "",
    category = "",
    rarity = 1,
    isTradable = false,
    isPso2Revived = false,
    hasColorVariation = false,
    availability = [],
    tags = [],
    coverImage = new CoverImage(),
  }: {
    description?: string;
    category?: string;
    rarity?: number;
    isTradable?: boolean;
    isPso2Revived?: boolean;
    hasColorVariation?: boolean;
    availability?: string[];
    tags?: string[];
    coverImage?: CoverImage;
  } = {}) {
    this.description = description;
    this.category = category;
    this.rarity = rarity;
    this.isTradable = isTradable;
    this.isPso2Revived = isPso2Revived;
    this.hasColorVariation = hasColorVariation;
    this.availability = availability;
    this.tags = tags;
    this.coverImage = coverImage;
  }
}

class CoverImage implements ICoverImage {
  id: string;
  url: string;

  constructor({ id = "", url = "" }: { id?: string; url?: string } = {}) {
    this.id = id;
    this.url = url;
  }
}

class Meta implements IMeta {
  createdAt: Timestamp;
  createdUser: string;
  updatedAt: Timestamp;
  updatedUser: string;

  constructor({
    createdAt = Timestamp.now(),
    createdUser = "",
    updatedAt = Timestamp.now(),
    updatedUser = "",
  }: {
    createdAt?: Timestamp;
    createdUser?: string;
    updatedAt?: Timestamp;
    updatedUser?: string;
  } = {}) {
    this.createdAt = createdAt;
    this.createdUser = createdUser;
    this.updatedAt = updatedAt;
    this.updatedUser = updatedUser;
  }
}
