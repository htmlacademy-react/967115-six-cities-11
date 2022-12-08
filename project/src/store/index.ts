import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';

const api = createAPI();

export const store = configureStore({
  // Тут должен появиться другой reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    })
});
