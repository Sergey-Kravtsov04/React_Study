import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const postService = createApi({
  reducerPath: 'postService',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => '/posts',
    })
  })
})
export const { useGetPokemonByNameQuery } = postService
// export const {
//   useLazyGetPostsQuery,
//   useGetPostsQuery,
// } = postService;