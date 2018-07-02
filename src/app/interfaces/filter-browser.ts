/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com
 * Purpose: Estructure of the list of filters in browser
 */

export interface FilterBrowser {
  date_in: string;
  type_rent: Array<string>;
  price_min: number;
  price_max: number;
  type_accomodation: Array<string>;
  number_bedthrooms: number;
  number_bathrooms: number;
  number_kitchen: number;
  number_livingrooms: number;
  services: Array<string>;
  smoke: boolean;
  pets: boolean;
}
