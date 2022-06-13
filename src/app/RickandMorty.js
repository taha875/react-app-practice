import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const RickAndMorty = createApi({
  reducerPath: "app",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api/" }),
  tagTypes: ["character"],
  endpoints: (builder) => ({
    // get characters
    getCharacter: builder.query({
      query: () => "character",
      invalidatesTags: ["character"],
    }),
  }),
});
export const { useGetCharacterQuery } = RickAndMorty;
