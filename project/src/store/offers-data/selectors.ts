import { NameSpace } from '../../constants';
import { Offer } from '../../types/offer';
import { State } from '../../types/state';

export const getOffers = (state: State): Offer[] => state[NameSpace.Offers].offers;
export const getOffersLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isOffersDataLoading;
export const getCurrentOffer = (state: State): Offer | null => state[NameSpace.Offers].currentOffer;
export const getCurrentOfferLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isCurrentOfferDataLoading;
export const getActivePlaceCardID = (state: State): number | null => state[NameSpace.Offers].activePlaceCardID;
export const getNearbyOffers = (state: State): Offer[] => state[NameSpace.Offers].nearbyOffers;
export const getNearbyOffersLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isNearbyOffersDataLoading;
export const getError = (state: State): boolean => state[NameSpace.Offers].error;
