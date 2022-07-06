import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import {
  nextReduxCookieMiddleware,
  wrapMakeStore,
} from "next-redux-cookie-wrapper";

import { authSlice } from "../features/auth/authSlice";
import { counterSlice } from "./../features/counter/counterSlice";

const getExpirationDate = (): Date => {
  const date = new Date();
  date.setDate(date.getDate() + 30);
  return date;
};

export const makeStore = wrapMakeStore(() =>
  configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer,
      [counterSlice.name]: counterSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend(
        nextReduxCookieMiddleware({
          expires: getExpirationDate(),
          subtrees: [`${authSlice.name}.value`],
        })
      ),
  })
);

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<AppStore>(makeStore);
