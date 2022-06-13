import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Characters = createApi({
  reducerPath: "app2",

  baseQuery: fetchBaseQuery({ baseUrl: "https://practice-packages.herokuapp.com/" }),
  tagTypes: ["users"],
  endpoints: (builder) => ({
    // get characters
    getCharacter: builder.query({
      query: () => "/users",
      method: "GET",
      providesTags: ["users"],
    }),
    addCharacter: builder.mutation({
      query: () => ({
        url: "/",
        method: "POST",
        body: (data) => ({
          name: data.name,
          description: data.description,
        }),
      }),
      invalidatesTags: ["users"],
    }),
  }),
});
export const { useGetCharacterQuery,useAddCharacterMutation } = Characters;
