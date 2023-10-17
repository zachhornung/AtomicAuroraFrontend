import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export type Picture = {
  id: number,
  description: string,
  picture: string,
}

export const picturesApi = createApi({
  reducerPath: 'picturesApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_BASE_URL}/api/`, credentials: "include" }),
  endpoints: (builder) => ({
    getAllPictures: builder.query<Picture[], Record<string, string> | undefined>({
      query: (params) => {
        if (Object.keys(params || {}).length) {
          const q = new URLSearchParams(params || {})
          return `pictures/?${q.toString()}`
        }
        return 'pictures/'
      },
    }),
    getPictureDetail: builder.query<Picture, number>({
      query: (id) => `pictures/${id}`
    }),
  })
})

export const { useGetAllPicturesQuery, useGetPictureDetailQuery } = picturesApi

