import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import { AppState } from "src/store/store";

import { useAppDispatch, useAppSelector } from "./../../store/hooks";
import { AuthTokens, login as loginApi } from "./api";

export interface AuthState {
  value: AuthTokens | null;
  status: "idle" | "loading" | "failed";
}

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }: { username: string; password: string }) =>
    await loginApi(username, password)
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: null,
    status: "idle",
  } as AuthState,
  reducers: {
    logout: (state) => {
      state.value = null;
    },
    setTokens: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(HYDRATE, (state, { payload }: any) => {
        return {
          ...state,
          ...payload.auth,
        };
      });
  },
});

export const { logout, setTokens } = authSlice.actions;

export const selectAuthTokens = (state: AppState) => state.auth.value;

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const tokens = useAppSelector(selectAuthTokens);

  return {
    /**
     * Is user logged in.
     */
    isLoggedIn: tokens !== null,

    /**
     * Will dispatch logout action.
     */
    logout: () => dispatch(logout()),

    /**
     * Will dispatch login action.
     *
     * @param username Username
     * @param password Password
     */
    login: (username: string, password: string) =>
      dispatch(login({ username, password })),
  };
};
