import { createSlice } from "@reduxjs/toolkit";
import { UserProcess } from "../../types/state";
import { AuthorizationStatuses, NameSpace } from "../../constants";
import {checkAuthAction, loginAction, logoutAction} from '../api-actions';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatuses.Unknown
}

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
      builder
        .addCase(checkAuthAction.fulfilled, (state) => {
          state.authorizationStatus = AuthorizationStatuses.Auth;
        })
        .addCase(checkAuthAction.rejected, (state) => {
          state.authorizationStatus = AuthorizationStatuses.NoAuth
        })
        .addCase(loginAction.fulfilled, (state) => {
          state.authorizationStatus = AuthorizationStatuses.Auth;
        })
        .addCase(loginAction.rejected, (state) => {
          state.authorizationStatus = AuthorizationStatuses.NoAuth;
        })
        .addCase(logoutAction.fulfilled, (state) => {
          state.authorizationStatus = AuthorizationStatuses.NoAuth;
        })
  },
});