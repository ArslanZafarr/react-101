import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/utils";

export const PublicApi = createApi({
  reducerPath: "public",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    // prepareHeaders: (headers, { getState }) => {
    //   const apiToken = getState().storeAuth.apiToken;
    //   if (apiToken) {
    //     headers.set("Authorization", `Bearer ${apiToken}`);
    //   }
    //   return headers;
    // },
  }),

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/global/products",
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }),
    }),
  }),
});

export const { useGetProductsQuery } = PublicApi;
