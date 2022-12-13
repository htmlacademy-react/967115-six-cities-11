import { store } from '../store';
import { AuthorizationStatuses } from '../constants';
import { Offer } from './offer';
import { Review } from './review';
import { City } from './city';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatuses;
}

export type OffersData = {
  offers: Offer[];
  isOffersDataLoading: boolean;
  currentOffer: Offer | null;
  favoriteOffers: Offer[];
  isFavoriteOffersDataLoading: boolean;
  activePlaceCardID: number | null;
  isCurrentOfferDataLoading: boolean;
  nearbyOffers: Offer[];
  isNearbyOffersDataLoading: boolean;
  error: boolean;
}

export type ReviewsData = {
  reviews: Review[];
  isReviewsDataLoading: boolean;
}

export type CityData = {
  city: City;
}

export type SortProcess = {
  isSortMenuOpened: boolean;
  activeSortOption: string;
}
