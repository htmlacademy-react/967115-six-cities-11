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
    Unknown = 'UNKNOWN',
    Pending = 'Pending'
}

export const CITIES: City[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    },
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
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
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    },
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
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
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorites = '/favorite'
}

export const enum NameSpace {
  User = 'USER',
  Offers = 'OFFERS',
  Reviews = 'REVIEWS',
  Cities = 'CITIES',
  Sort = 'SORT',
  Error = 'ERROR'
}

export const MAX_REVIEW_LENGTH = 300;
