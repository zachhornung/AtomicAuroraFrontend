import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "../features/auth/state/user"
import cartReducer from "../features/cart/state/cart"
import { apiSlice } from "./services/shared/apiSlice";

export const rootReducer = combineReducers({
  user: persistReducer({ key: "user", storage }, userReducer),
  cart: persistReducer({ key: "cart", storage }, cartReducer),
  [apiSlice.reducerPath]: persistReducer({key: "apiSlice", storage}, apiSlice.reducer)
});

export const makeStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
        },
      }).concat([
        apiSlice.middleware
      ]);
    },
  });
};

export const store = makeStore();

export const appStorePersistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type Store = typeof store;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
