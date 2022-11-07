import {MAX_PLACE_RATING} from '../src/constants';

export function setStarRating (rating: number): number {
  return (Math.round(rating) * 100 / MAX_PLACE_RATING);
}
