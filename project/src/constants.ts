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

export const Cities = {
  Brussels: 'Brussels',
  Cologne: 'Cologne',
  Hamburg: 'Hamburg',
  Paris: 'Paris',
  Amsterdam: 'Amsterdam',
  Dusseldorf: 'Dusseldorf'
};

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
