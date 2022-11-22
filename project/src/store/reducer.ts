import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { loadOffers, changeCity } from './actions';
import {City} from '../types/city';
import {Offer} from '../types/offer';
import {cities} from '../mocks/cities';

type InitialState = {
  city: City;
  offers: Offer[] | null;
}

const initialState: InitialState = {
  city: cities[0],
  offers: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state) => {
      state.offers = offers;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    });
});

export {reducer};
