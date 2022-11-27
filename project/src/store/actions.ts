import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';

export const loadOffers = createAction('offers/load');

export const changeCity = createAction<City>('city/change');

export const toggleSortMenu = createAction('sort/openSortMenu');

export const changeSortOption = createAction<string>('sort/changeSortOption');

export const changeActivePlaceCardID = createAction<number | null>('offer/displayOnMap');
