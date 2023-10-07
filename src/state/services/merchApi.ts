import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const merchApi = createApi({
  reducerPath: 'merchApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
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
