import { Offer } from './types/offer';
import {SortOptions} from './constants';

import {MAX_PLACE_RATING} from '../src/constants';

export function setStarRating (rating: number): number {
  return (Math.round(rating) * 100 / MAX_PLACE_RATING);
}

export function offersInCity (offers: Offer[], city: string): Offer[] {
  return offers.filter((offer) => offer.city.name === city);
}

const sortPriceHighToLow = (a: Offer, b: Offer): number => {
  if (a.price < b.price) {
    return 1;
  }

  if (a.price > b.price) {
    return -1;
  }

  return 0;
};

const sortPriceLowToHigh = (a: Offer, b: Offer): number => {
  if (a.price > b.price) {
    return 1;
  }

  if (a.price < b.price) {
    return -1;
  }

  return 0;
};

const sortRatingHighToLow = (a: Offer, b: Offer): number => {
  if (a.rating < b.rating) {
    return 1;
  }

  if (a.rating > b.rating) {
    return -1;
  }

  return 0;
};

export function sortingByOption (option: string, offers: Offer[]): Offer[] {
  const sortedOffers = offers;
  switch (option) {
    case SortOptions.PriceLowToHigh:
      return sortedOffers.sort(sortPriceLowToHigh);
    case SortOptions.PriceHighToLow:
      return sortedOffers.sort(sortPriceHighToLow);
    case SortOptions.TopRatedFirst:
      return sortedOffers.sort(sortRatingHighToLow);
    default:
      return offers;
  }
}
