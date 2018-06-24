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
  city: number;
  nDoor: string;
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
  nHome: number;
  nFloor: number;
}
