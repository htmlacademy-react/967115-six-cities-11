import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Offer } from '../types/offer';
import { Review } from '../types/review';
import { AuthData } from '../types/auth-data';
import { AuthInfo } from '../types/auth-info';
import { SentReview } from '../types/sent-review';
import { APIRoutes } from '../constants';
import { saveToken, dropToken } from '../services/token';

export const fetchOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoutes.Offers);
    return data;
  }
);

export const fetchFavoriteOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetchFavoriteOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoutes.Favorites);
    return data;
  }
);

export const changeFavoriteStatus = createAsyncThunk<void, [number, number], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/changeFavoriteStatus',
  async ([offerID, status], {dispatch, extra: api}) => {
    await api.post<Offer>(`${APIRoutes.Favorites}/${offerID}/${status}`);
  }
);

export const fetchCurrentOfferAction = createAsyncThunk<Offer, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetchCurrentOffer',
  async (offerID, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer>(`${APIRoutes.Offers}/${offerID}`);
    return data;
  }
);

export const fetchReviewsAction = createAsyncThunk<Review[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'reviews/fetchReviews',
  async (offerID, {dispatch, extra: api}) => {
    const {data} = await api.get<Review[]>(`${APIRoutes.Comments}/${offerID}`);
    return data;
  }
);

export const fetchNearbyOffersAction = createAsyncThunk<Offer[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchNearbyOffers',
  async (offerID, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(`${APIRoutes.Offers}/${offerID}/nearby`);
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkLogin',
  async (_arg, {dispatch, extra: api}) => {
    await api.get(APIRoutes.Login);
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/Login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<AuthInfo>(APIRoutes.Login, {email, password});
    saveToken(token);
  }
);

export const sendReviewAction = createAsyncThunk<void, [SentReview, number], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'reviews/sendReview',
  async ([{comment, rating}, offerID], {dispatch, extra: api}) => {
    await api.post<Review>(`${APIRoutes.Comments}/${offerID}`, {comment, rating});
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoutes.Logout);
    dropToken();
  },
);
