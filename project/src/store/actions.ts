import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';

export const loadOffers = createAction<Offer[]>('offers/load');

export const changeCity = createAction<City>('city/change');

export const toggleSortMenu = createAction('sort/openSortMenu');

export const changeSortOption = createAction<string>('sort/changeSortOption');

export const changeActivePlaceCardID = createAction<number | null>('offer/displayOnMap');
