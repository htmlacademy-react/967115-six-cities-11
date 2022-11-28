import { City } from './types/city';

export enum AppRoutes {
    Login = '/login',
    Favorites = '/favorites',
    Root = '/',
    Offer = '/offer',
    NotFound = '*'
}

export enum AuthorizationStatuses {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN'
}

export const CITIES: City[] = [
  {
    name: 'Paris',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 11
    },
  },
  {
    name: 'Cologne',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 11
    },
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    },
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 11
    },
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 11
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 11
    },
  },
];

export const MAX_PLACE_RATING = 5;
export const MIN_PLACE_RATING = 1;

export const MAX_PLACE_IMAGES = 6;

export const enum SortOptionsValues {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first'
}

export const SORT_OPTIONS = [
  SortOptionsValues.Popular,
  SortOptionsValues.PriceLowToHigh,
  SortOptionsValues.PriceHighToLow,
  SortOptionsValues.TopRatedFirst
];

export const enum APIRoutes {
  Offers = '/hotels',
}
