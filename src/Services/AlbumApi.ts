import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AlbumType, NewSongType } from "../Types/LocalDataTypes";




export const albumApi = createApi({
  reducerPath: "albumApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://musica-api.up.railway.app" }),
  endpoints: (builder) => ({
    fetchAlbum: builder.query<AlbumType[], void>({
      query: () => ({
        url: "/playlist",
        method: "GET",
      }),
    }),
    fetchNewSongs: builder.query<NewSongType[], void>({
      query: () => ({
        url: "/new",
        method: "GET",
      }),
    }),

    fetchPopularSongs: builder.query<NewSongType[], void>({
      query: () => ({
        url: "/popular",
        method: "GET",
      }),
    }),
  }),
});

export const { useFetchAlbumQuery , useFetchNewSongsQuery, useFetchPopularSongsQuery} = albumApi;
