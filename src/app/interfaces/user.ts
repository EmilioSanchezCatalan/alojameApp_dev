import { ImgLoaded } from './img-loaded';

export interface User {
  id: number;
  username: string;
  email: string;
  Userinfo: Userinfo;
}

export class Userinfo {
  id: number;
  name: string;
  surname: string;
  birthdate: string;
  gender: string;
  dni: string;
  homeaddress: string;
  feature_partying: number;
  feature_geek: number;
  feature_organized: number;
  feature_athlete: number;
  feature_sociable: number;
  feature_active: number;
  users_id: number;
  userpicture_id: number;
  description: string;
  name_private: boolean;
  surname_private: boolean;
  birthdate_private: boolean;
  phone_private: boolean;
  homeaddress_private: boolean;
  email_private: boolean;
  countries_id: string;
  country_private: boolean;
  createdAt: string;
  updatedAt: string;
  UserPicture: ImgLoaded;
}
