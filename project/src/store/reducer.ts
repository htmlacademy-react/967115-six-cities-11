import { createReducer } from '@reduxjs/toolkit';
import { setOffers,
  changeCity,
  toggleSortMenu,
  changeSortOption,
  changeActivePlaceCardID } from './actions';
import {City} from '../types/city';
import {Offer} from '../types/offer';
import { CITIES } from '../constants';
import {SORT_OPTIONS} from '../constants';

type InitialState = {
  city: City;
  offers: Offer[];
  isSortMenuOpened: boolean;
  activeSortOption: string;
  activePlaceCardID: number | null;
  isOffersDataLoading: boolean;
}

const initialState: InitialState = {
  city: CITIES[0],
  offers: [],
  isSortMenuOpened: false,
  activeSortOption: SORT_OPTIONS[0],
  activePlaceCardID: null,
  isOffersDataLoading: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(toggleSortMenu, (state) => {
      state.isSortMenuOpened = !state.isSortMenuOpened;
    })
    .addCase(changeSortOption, (state, action) => {
      state.activeSortOption = action.payload;
    })
    .addCase(changeActivePlaceCardID, (state, action) => {
      state.activePlaceCardID = action.payload;
    });
});

export {reducer};
