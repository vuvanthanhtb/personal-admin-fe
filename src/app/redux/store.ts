import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { loadingMiddleware } from "./middleware";
import loadingReducer from "./loading.slice";
import authReducer from "modules/auth/business/slice.auth";
import calendarReducer from "modules/calendar/business/slice.calendar";
import apiReducer from "modules/api/business/slice.api";
import roleReducer from "modules/role/business/slice.role";
import permissionReducer from "modules/permission/business/slice.permission";
import userReducer from "modules/user/business/slice.user";

const rootReducer = combineReducers({
  app: loadingReducer,
  auth: authReducer,
  calendar: calendarReducer,
  api: apiReducer,
  role: roleReducer,
  permission: permissionReducer,
  user: userReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(loadingMiddleware),
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
