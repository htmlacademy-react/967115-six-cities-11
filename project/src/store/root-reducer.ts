import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../constants';
import { city } from './city/city';
import { offers } from './offers/offers';
import { reviews } from './reviews/reviews';
import { sort } from './sort/sort';
import { user } from './user/user';

export const rootReducer = combineReducers({
  [NameSpace.Cities]: city.reducer,
  [NameSpace.Offers]: offers.reducer,
  [NameSpace.Reviews]: reviews.reducer,
  [NameSpace.Sort]: sort.reducer,
  [NameSpace.User]: user.reducer
});
