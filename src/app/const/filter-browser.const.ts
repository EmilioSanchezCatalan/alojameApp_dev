/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com
 * Purpose: contition cero where filters is going to state when there are 0
 * filters.
 */

import { FilterBrowser } from '../interfaces/filter-browser';

export const ZERO_FILTER: FilterBrowser = {
  date_in: '',
  type_rent: [],
  price_max: 0,
  price_min: 0,
  type_accomodation: [],
  number_bedthrooms: 0,
  number_bathrooms: 0,
  number_kitchen: 0,
  services: [],
  rules: []
};
