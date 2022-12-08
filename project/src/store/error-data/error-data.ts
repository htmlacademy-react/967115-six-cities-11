import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { ErrorData } from '../../types/state';

const initialState = {
  error: false
};

export const errorData = createSlice({
  name: NameSpace.Error,
  initialState,
  reducers: {}
});
