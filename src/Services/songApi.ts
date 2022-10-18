import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PopularSongsType } from "../Types/PopularTypes";
import { WorldChartTypes } from "../Types/WorldChartTypes";

export const songApi = createApi({
  reducerPath: "songApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers: Headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "7f9463425cmsh4781bfd89f18494p16c11ejsn5c446d36269b"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchWorldChart: builder.query<WorldChartTypes[], void>({
      query: () => ({
        url: `/charts/world`,

        method: "GET",
      }),
    }),
    fetchPopularByCountry: builder.query<PopularSongsType[], string>({
      query: (country) => ({
        url: `/charts/country?country_code=${country}`,

        method: "GET",
      }),
    }),
    fetchWorldSongs: builder.query<WorldChartTypes[], void>({
      query: () => ({
        url: `/charts/world`,

        method: "GET",
      }),
    }),
  }),
});

export const {
  useFetchWorldChartQuery,
  useFetchPopularByCountryQuery,
  useFetchWorldSongsQuery,
} = songApi;
