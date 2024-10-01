import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/utils";

export const AuthApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const apiToken = getState().storeAuth.apiToken;
      if (apiToken) {
        headers.set("Authorization", `Bearer ${apiToken}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    checkPhone: builder.mutation({
      query: (userData) => ({
        url: "check/phone",
        method: "POST",
        body: userData,
        headers: {
          Accept: "application/json",
        },
      }),
    }),

    userRegister: builder.mutation({
      query: (userData) => ({
        url: "register/phone",
        method: "POST",
        body: userData,
        headers: {
          Accept: "application/json",
        },
      }),
    }),

    userLogin: builder.mutation({
      query: (userData) => ({
        url: "/auth/login",
        method: "POST",
        body: userData,
        headers: {
          Accept: "application/json",
        },
      }),
    }),

    userLogout: builder.mutation({
      query: () => ({
        url: "logout",
        method: "POST",
        headers: {
          Accept: "application/json",
        },
      }),
    }),
  }),
});

export const {
  useCheckPhoneMutation,
  useUserRegisterMutation,
  useUserLoginMutation,
  useUserLogoutMutation,
} = AuthApi;
