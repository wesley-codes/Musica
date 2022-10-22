import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AlbumType, PlaylistType } from "../Types/LocalDataTypes";




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
    fetchAlbumID: builder.query<PlaylistType[], string>({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useFetchAlbumQuery, useFetchAlbumIDQuery } = albumApi;
