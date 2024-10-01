import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authSlice from "./slices/authSlice";
import userReducer from './slices/usersSlice';

import { AuthApi } from "./api/auth/authApi";
import { PublicApi } from "./api/public/publicApi";

const store = configureStore({
  reducer: {
    storeAuth: authSlice,
    users: userReducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [PublicApi.reducerPath]: PublicApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(AuthApi.middleware)
      .concat(PublicApi.middleware),
});

setupListeners(store.dispatch);

export default store;
