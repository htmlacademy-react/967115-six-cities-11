import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { CityData } from '../../types/state';
import { CITIES } from '../../constants';
import { City } from '../../types/city';

const initialState: CityData = {
  city: CITIES[0]
};

export const cityData = createSlice({
  name: NameSpace.Cities,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    }
  }
});

export const {changeCity} = cityData.actions;
