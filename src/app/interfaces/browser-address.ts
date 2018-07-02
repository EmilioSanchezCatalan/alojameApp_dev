import { BasicTable } from './basic-table';

export interface BrowserAddress {
  list_address: Array<{
    address: string;
    City: BasicTable
  }>;
  list_cities: Array<{
    cities_id: number;
    City: BasicTable
  }>;
}
