import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
// import {
//   nextReduxCookieMiddleware,
//   wrapMakeStore,
// } from "next-redux-cookie-wrapper";

import { counterSlice } from "@/features/counter/counterSlice";
import { authSlice } from "@/features/auth/authSlice";

//const getExpirationDate = (): Date => {
//  const date = new Date();
//  date.setDate(
//    date.getDate() + parseInt(process.env.NEXT_PUBLIC_AUTH_COOKIE_MAX_AGE!, 10)
//  );
//  return date;
//};

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [counterSlice.name]: counterSlice.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;

// export const makeStore = wrapMakeStore(() =>
//   configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware().prepend(
//         nextReduxCookieMiddleware({
//           expires: getExpirationDate(),
//           sameSite: "lax",
//           secure: true,
//           subtrees: [`${authSlice.name}.value`, `${counterSlice.name}.value`],
//         })
//       ),
//   })
// );
export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

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
