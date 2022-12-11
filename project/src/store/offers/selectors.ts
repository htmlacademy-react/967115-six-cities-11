import { NameSpace } from '../../constants';
import { Offer } from '../../types/offer';
import { State } from '../../types/state';

export const selectOffers = (state: State): Offer[] => state[NameSpace.Offers].offers;
export const selectOffersLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isOffersDataLoading;
export const selectFavoriteOffers = (state: State): Offer[] => state[NameSpace.Offers].favoriteOffers;
export const selectFavoriteOffersLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isFavoriteOffersDataLoading;
export const selectCurrentOffer = (state: State): Offer | null => state[NameSpace.Offers].currentOffer;
export const selectCurrentOfferLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isCurrentOfferDataLoading;
export const selectActivePlaceCardID = (state: State): number | null => state[NameSpace.Offers].activePlaceCardID;
export const selectNearbyOffers = (state: State): Offer[] => state[NameSpace.Offers].nearbyOffers;
export const selectNearbyOffersLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isNearbyOffersDataLoading;
export const selectError = (state: State): boolean => state[NameSpace.Offers].error;
