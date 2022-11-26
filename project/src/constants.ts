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

// Нужен массив. Достаточно только значений
export const enum SortOptions {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first'
}

export const SORT_OPTIONS = [
  SortOptions.Popular,
  SortOptions.PriceLowToHigh,
  SortOptions.PriceHighToLow,
  SortOptions.TopRatedFirst
];
