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
        "3545ac079bmsh3d174fc135aed63p17c249jsnb4ffc44c3f32"
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
