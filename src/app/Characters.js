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
      query: ({ body }) => ({
        url: "/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["users"],
    }),
    deleteCharacter: builder.mutation({
      query: ({ id }) => ({
        url: "/",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: ["users"],
    }),
    updateCharacter: builder.mutation({
      query: ({ id, body }) => ({
        url: "/",
        method: "PATCH",
        body: { id, ...body },
      }),
      invalidatesTags: ["users"],
    }),
  }),
});
export const { useGetCharacterQuery, useAddCharacterMutation, useDeleteCharacterMutation, useUpdateCharacterMutation } = Characters;
