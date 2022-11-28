import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import { AppState } from "src/store/store";

import { API_REQUEST_STATUS } from "@/services/api.service";

import { thunkHandler } from "../utilities";

import { useAppDispatch, useAppSelector } from "./../../store/hooks";
import {
  AuthTokens,
  GrantType,
  login as loginApi,
  loginSocial as loginSocialApi,
} from "./api";

export interface AuthState {
  value: AuthTokens | null;
  status: API_REQUEST_STATUS;
  error: SerializedError | null;
}

export const login = createAsyncThunk(
  "auth/login",
  async (
    { username, password }: { username: string; password: string },
    { rejectWithValue }
  ) => thunkHandler(loginApi(username, password), rejectWithValue)
);

export const loginSocial = createAsyncThunk(
  "auth/loginSocial",
  async (
    { grantType, token }: { grantType: GrantType; token: string },
    { rejectWithValue }
  ) => thunkHandler(loginSocialApi(grantType, token), rejectWithValue)
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: null,
    status: "idle",
    error: null,
  } as AuthState,
  reducers: {
    logout: (state) => {
      state.value = null;
    },
    setTokens: (state, action) => {
      state.value = action.payload;
    },
    setIsLoading: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.value = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as SerializedError;
      })
      // Social
      .addCase(loginSocial.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginSocial.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.value = action.payload;
        state.error = null;
      })
      .addCase(loginSocial.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as SerializedError;
      })
      .addCase(HYDRATE, (state, { payload }: any) => {
        return {
          ...state,
          ...payload.auth,
        };
      });
  },
});

export const { logout, setTokens, setIsLoading } = authSlice.actions;

export const selectAuthTokens = (state: AppState) => state.auth.value;
export const selectIsLoading = (state: AppState) =>
  state.auth.status === "loading";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const tokens = useAppSelector(selectAuthTokens);
  const status = useAppSelector((state) => state.auth.status);
  const error = useAppSelector((state) => state.auth.error);

  return {
    /**
     * Current tokens
     */
    tokens,

    /**
     * Auth status
     */
    status,

    /**
     * Auth error
     */
    error,

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

    /**
     * Will login using social channel
     *
     * @param grantType Grant type
     * @param token External token
     */
    loginSocial: (grantType: GrantType, token: string) =>
      dispatch(loginSocial({ grantType, token })),
  };
};
