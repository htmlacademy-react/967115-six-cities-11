import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { AuthorizationStatuses } from '../constants';

export const setOffers = createAction<Offer[]>('offers/setOffers');

export const changeCity = createAction<City>('city/change');

export const toggleSortMenu = createAction('sort/toggleSortMenu');

export const changeSortOption = createAction<string>('sort/changeSortOption');

export const changeActivePlaceCardID = createAction<number | null>('offer/displayOnMap');

export const setOffersLoadingStatus = createAction<boolean>('offers/setOffersLoadingStatus');

export const setCurrentOfferLoadingStatus = createAction<boolean>('offers/setCurrentOfferLoadingStatus');

export const setAuthorizationStatus = createAction<AuthorizationStatuses>('user/setAuthorizationStatus');

export const setCurrentOffer = createAction<Offer>('offers/setCurrentOffer');
