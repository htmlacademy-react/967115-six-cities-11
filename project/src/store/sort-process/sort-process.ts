import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { SortProcess } from '../../types/state';
import { SORT_OPTIONS } from '../../constants';

const initialState: SortProcess = {
  isSortMenuOpened: false,
  activeSortOption: SORT_OPTIONS[0] // заменить индекс на константу с инициирующим значением
};

export const sortProcess = createSlice({
  name: NameSpace.Sort,
  initialState,
  reducers: {
    toggleSortMenu: (state) => {
      state.isSortMenuOpened = !state.isSortMenuOpened;
    },
    changeSortOption: (state, action: PayloadAction<string>) => {
      state.activeSortOption = action.payload;
    }
  }
});

export const {toggleSortMenu, changeSortOption} = sortProcess.actions;
