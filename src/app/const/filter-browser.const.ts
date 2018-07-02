/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com
 * Purpose: contition cero where filters is going to state when there are 0
 * filters.
 */

import { FilterBrowser } from '../interfaces/filter-browser';

export const ZERO_FILTER: FilterBrowser = {
  date_in: '',
  type_rent: [],
  price_max: null,
  price_min: null,
  type_accomodation: [],
  number_bedthrooms: null,
  number_bathrooms: null,
  number_kitchen: null,
  number_livingrooms: null,
  services: [],
  pets: false,
  smoke: false
};
