import { ImgLoaded } from './img-loaded';

export interface FormCreateHome {
  homeType: number;
  rentType: number;
  area: number;
  nRoomers: number;
  nBedRoom: number;
  nKitchen: number;
  nBathRoom: number;
  nLivingRoom: number;
  services: Array<{
    id: number;
    isChecked: boolean;
  }>;
  address: string;
  city: string;
  nDoor: number;
  zip: number;
  smokers: boolean;
  pets: boolean;
  listRules: Array<{
    rule: string;
    type: number;
  }>;
  title: string;
  price: number;
  bill: Array<{
    id: number;
    isChecked: boolean;
  }>;
  minStance: number;
  fiance: number;
  avalibleDate: string;
  description: string;
  imgs: Array<ImgLoaded>;
}
