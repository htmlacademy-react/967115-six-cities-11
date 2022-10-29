import {MAX_PLACE_RATING} from '../src/constants';
import {Cities} from '../src/constants';
import {Offer} from './types/offer';

export function setStarRating (rating: number): number {
  return (Math.round(rating) * 100 / MAX_PLACE_RATING);
}

export const Filter = {
  [Cities.Amsterdam]: (offers: Offer[]) => offers.filter((offer) => offer.city.name === Cities.Amsterdam),
  [Cities.Brussels]: (offers: Offer[]) => offers.filter((offer) => offer.city.name === Cities.Brussels),
  [Cities.Cologne]: (offers: Offer[]) => offers.filter((offer) => offer.city.name === Cities.Cologne),
  [Cities.Dusseldorf]: (offers: Offer[]) => offers.filter((offer) => offer.city.name === Cities.Dusseldorf),
  [Cities.Hamburg]: (offers: Offer[]) => offers.filter((offer) => offer.city.name === Cities.Hamburg),
  [Cities.Paris]: (offers: Offer[]) => offers.filter((offer) => offer.city.name === Cities.Paris),
};
