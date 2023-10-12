import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const merchApi = createApi({
  reducerPath: 'merchApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_BASE_URL, credentials: "include" }),
  endpoints: (builder) => ({
    getAllMerch: builder.query({
      query: (params?: Record<string, string>) => {
        if (params) {
          const q = new URLSearchParams(params)
          return `merch/?${q.toString()}`
        }
        return 'merch/'
      },
    }),
    getMerchDetail: builder.query({
      query: (id: number) => `merch/${id}`
    }),
  })
})
