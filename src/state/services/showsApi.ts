import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export type ShowType = {
  name: string,
  description: string,
  show_date: string,
}

export const showsApi = createApi({
  reducerPath: 'showsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_BASE_URL}/api/`, credentials: "include" }),
  endpoints: (builder) => ({
    getAllShows: builder.query<ShowType[], Record<string, string> | undefined>({
      query: (params) => {
        if (Object.keys(params || {}).length) {
          const q = new URLSearchParams(params || {})
          return `shows/?${q.toString()}`
        }
        return 'shows/'
      },
    }),
    getShowDetail: builder.query<ShowType, number>({
      query: (id) => `shows/${id}`
    }),
  })
})

export const { useGetAllShowsQuery, useGetShowDetailQuery } = showsApi
