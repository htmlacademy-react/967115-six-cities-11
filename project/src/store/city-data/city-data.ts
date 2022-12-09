import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { CityData } from '../../types/state';
import { CITIES } from '../../constants';

const initialState: CityData = {
  city: CITIES[0]
};

export const cityData = createSlice({
  name: NameSpace.Cities,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload;
    }
  }
});

export const {changeCity} = cityData.actions;
