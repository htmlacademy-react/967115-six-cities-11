import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { Review } from '../types/review';

export const setOffers = createAction<Offer[]>('offers/setOffers');

export const changeCity = createAction<City>('city/change');

export const toggleSortMenu = createAction('sort/toggleSortMenu');

export const changeSortOption = createAction<string>('sort/changeSortOption');

export const changeActivePlaceCardID = createAction<number | null>('offer/displayOnMap');

export const setOffersLoadingStatus = createAction<boolean>('offers/setOffersLoadingStatus');

export const setCurrentOfferLoadingStatus = createAction<boolean>('offers/setCurrentOfferLoadingStatus');

export const setCurrentOffer = createAction<Offer>('offers/setCurrentOffer');

export const setReviews = createAction<Review[]>('reviews/setReviews');

export const setReviewsLoadingStatus = createAction<boolean>('comments/setReviewsLoadingStatus');

export const setNearbyOffers = createAction<Offer[]>('offers/setNearbyOffers ');

export const setNearbyOffersLoadingStatus = createAction<boolean>('offers/setNearbyOffersLoadingStatus');

export const setError = createAction<boolean>('offers/setError');
