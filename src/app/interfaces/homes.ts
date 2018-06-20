export interface ItemHome {
  id: number;
  title: string;
  price: number;
  num_roomers_total: number;
  typerent: number;
  HomeType: {
    id: number,
    name: string;
  };
  HomePictures: Array<{
    id: number;
    url: string;
  }>;
}
