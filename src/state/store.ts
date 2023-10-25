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
import { authApi } from "./services/authApi";
import { merchApi } from "./services/merchApi";
import { showsApi } from "./services/showsApi";
import { picturesApi } from "./services/picturesApi"
import userReducer from "./user"

export const rootReducer = combineReducers({
  user: persistReducer({key: "user", storage}, userReducer),
  [authApi.reducerPath]: persistReducer({key: "authApi", storage}, authApi.reducer),
  [merchApi.reducerPath]: persistReducer({key: "merchApi", storage}, merchApi.reducer),
  [showsApi.reducerPath]: persistReducer({key: "showsApi", storage}, showsApi.reducer),
  [picturesApi.reducerPath]: persistReducer({key: "picturesApi", storage}, picturesApi.reducer),
});

export const makeStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
        }
      }).concat([
        showsApi.middleware,
        merchApi.middleware,
        picturesApi.middleware,
      ]);
    },
  });
};

export const store = makeStore()

export const appStorePersistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof makeStore>
export type AppState =  ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export type Store = typeof store

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
