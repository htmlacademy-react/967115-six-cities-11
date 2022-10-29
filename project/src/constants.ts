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
