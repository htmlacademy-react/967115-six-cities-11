import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../constants';
import { cityData } from './city-data/city-data';
import { offersData } from './offers-data/offers-data';
import { reviewsData } from './reviews-data/reviews-data';
import { sortProcess } from './sort-process/sort-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Cities]: cityData.reducer,
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.Reviews]: reviewsData.reducer,
  [NameSpace.Sort]: sortProcess.reducer,
  [NameSpace.User]: userProcess.reducer
});
