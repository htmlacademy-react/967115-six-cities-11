import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';

export const loadOffers = createAction('offers/load');

export const changeCity = createAction<{city: City}>('city/change');
