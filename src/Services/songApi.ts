import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PopularSongsType } from "../Types/PopularTypes";
import { WorldChartTypes } from "../Types/WorldChartTypes";

export const songApi = createApi({
  reducerPath: "songApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
  }),
  endpoints: (builder) => ({
    fetchWorldChart: builder.query<WorldChartTypes[], void>({
      query: () => ({
        url: `/charts/world`,
        headers: {
          "X-RapidAPI-Key":
            "a20b85b309msh81a7aff222f08f0p1f2bfajsn0167f39864e9",
          "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
        },
        method: "GET",
      }),
    }),
    fetchPopularByCountry: builder.query<PopularSongsType[], string>({
        query: (country) => ({
          url: `/charts/country?country_code=${country}`,
          headers: {
            'X-RapidAPI-Key': 'a20b85b309msh81a7aff222f08f0p1f2bfajsn0167f39864e9',
            'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
          },
          method: "GET",
        }),
      }),
      fetchPopularByCountryArtist: builder.query<PopularSongsType[], string>({
        query: (country) => ({
          url: `/charts/country?country_code=${country}`,
          headers: {
            'X-RapidAPI-Key': 'a20b85b309msh81a7aff222f08f0p1f2bfajsn0167f39864e9',
            'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
          },
          method: "GET",
        }),
      }),
  }),
});

export const { useFetchWorldChartQuery, useFetchPopularByCountryQuery, useFetchPopularByCountryArtistQuery } = songApi;
