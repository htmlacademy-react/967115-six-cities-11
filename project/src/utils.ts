import { Offer } from './types/offer';

import {MAX_PLACE_RATING} from '../src/constants';

export function setStarRating (rating: number): number {
  return (Math.round(rating) * 100 / MAX_PLACE_RATING);
}

export function offersInCity (offers: Offer[], city: string): Offer[] {
  return offers.filter((offer) => offer.city.name === city);
}
