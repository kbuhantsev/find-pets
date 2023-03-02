import { createSlice } from '@reduxjs/toolkit';
import { userApi } from './userApi';

export const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, isLoggedIn: false },
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(
        userApi.endpoints.logInUser.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.token;
          state.user = payload.user;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(userApi.endpoints.logOutUser.matchFulfilled, state => {
        state.token = null;
        state.user = null;
        state.isLoggedIn = false;
      })
      .addMatcher(
        userApi.endpoints.getCurrentUser.matchFulfilled,
        (state, { payload }) => {
          state.user = payload;
          state.isLoggedIn = true;
        }
      );
  },
});
