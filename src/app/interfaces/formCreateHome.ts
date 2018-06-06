export interface FormCreateHome {
  homeType: number;
  rentType: number;
  area: number;
  nRoomers: number;
  nBedRoom: number;
  nKitchen: number;
  nBathRoom: number;
  nLivingRoom: number;
  services: Array<number>;
  address: string;
  city: string;
  nDoor: number;
  zip: number;
  smokers: boolean;
  pets: boolean;
  listRules: Array<{
    text: string;
    type: number;
  }>;
  title: string;
  price: number;
  bill: Array<number>;
  minStance: number;
  finace: number;
  avalibleDate: string;
}
