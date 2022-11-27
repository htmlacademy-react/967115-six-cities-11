import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Offer } from '../types/offer';
import { APIRoutes } from '../constants';
import { loadOffers } from './actions';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetch',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoutes.Offers);
    dispatch(loadOffers(data));
  }
);
