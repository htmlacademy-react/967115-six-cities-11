import { createSlice } from '@reduxjs/toolkit';
import {OffersData} from '../../types/state';
import { NameSpace } from '../../constants';
import {
  fetchOffersAction,
  fetchCurrentOfferAction,
  fetchNearbyOffersAction} from '../api-actions';

const initialState: OffersData = {
  offers: [],
  isOffersDataLoading: false,
  currentOffer: null,
  isCurrentOfferDataLoading: false,
  activePlaceCardID: null,
  nearbyOffers: [],
  isNearbyOffersDataLoading: false,
  error: false
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeActivePlaceCardID: (state, action) => {
      state.activePlaceCardID = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchCurrentOfferAction.pending, (state) => {
        state.isCurrentOfferDataLoading = true;
      })
      .addCase(fetchCurrentOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.isCurrentOfferDataLoading = false;
        state.error = false;
      })
      .addCase(fetchCurrentOfferAction.rejected, (state) => {
        state.error = true;
      })
      .addCase(fetchNearbyOffersAction.pending, (state) => {
        state.isNearbyOffersDataLoading = true;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
        state.isNearbyOffersDataLoading = false;
      })
  },
});

export const {changeActivePlaceCardID} = offersData.actions; 