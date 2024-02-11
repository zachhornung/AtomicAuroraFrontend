import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_BASE_URL}/api/`, credentials: "include" }),
  tagTypes: [
    "Pictures",
    "Products",
    "Shows",
  ],
  endpoints: () => ({})
})

