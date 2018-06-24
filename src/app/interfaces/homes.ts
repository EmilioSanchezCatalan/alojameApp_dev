import { BasicTable } from './basic-table';

export interface ItemHome {
  id: number;
  title: string;
  price: number;
  num_roomers_total: number;
  typerent: number;
  HomeType: BasicTable;
  HomePictures: Array<{
    id: number;
    url: string;
  }>;
}

export interface HomesFull {
  id: number;
  title: string;
  metres: number;
  num_roomers_total: number;
  typehomes_id: number;
  typerent: number;
  num_bedroom: number;
  num_bathroom: number;
  num_livingroom: number;
  num_kitchen: number;
  address: string;
  num_door: string;
  num_floor: number;
  zip: number;
  smokers: boolean;
  pets: boolean;
  price: number;
  min_stance: number;
  fiance: number;
  delete: boolean;
  description: string;
  num_roomers_actual: number;
  cities_id: number;
  num_home: number;
  users_id: number;
  available_date: string;
  createdAt: string;
  updatedAt: string;
  HomeType: BasicTable;
  HomePictures: Array<{
    id: number;
    url: string;
  }>;
  HomeBills: Array<BasicTable>;
  HomeRules: Array<{
    id: number;
    text: string;
    type: number;
  }>;
  HomeServices: Array<BasicTable>;
  User: {
    id: number;
    username: string;
    email: string;
    Userinfo: {
      name: string;
      surname: string;
      UserPicture: {
        id: number;
        url: string;
      }
    }
  };
}
