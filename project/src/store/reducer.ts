import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { loadOffers, changeCity, displaySortMenu, changeSortOption } from './actions';
import {City} from '../types/city';
import {Offer} from '../types/offer';
import {cities} from '../mocks/cities';
import {SORT_OPTIONS} from '../constants';

type InitialState = {
  city: City;
  offers: Offer[] | null;
  isSortMenuOpened: boolean;
  activeSortOption: string;
}

const initialState: InitialState = {
  city: cities[0],
  offers: null,
  isSortMenuOpened: false,
  activeSortOption: SORT_OPTIONS[0]
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state) => {
      state.offers = offers;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(displaySortMenu, (state) => {
      state.isSortMenuOpened = !state.isSortMenuOpened;
    })
    .addCase(changeSortOption, (state, action) => {
      state.activeSortOption = action.payload;
    });
});

export {reducer};
