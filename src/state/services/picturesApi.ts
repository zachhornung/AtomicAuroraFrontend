import { apiSlice } from "./shared/apiSlice"

export type Picture = {
  id: number,
  description: string,
  picture: string,
}

export const picturesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPictures: builder.query<Picture[], Record<string, string> | undefined>({
      query: (params) => {
        if (Object.keys(params || {}).length) {
          const q = new URLSearchParams(params || {})
          return `pictures/?${q.toString()}`
        }
        return 'pictures/'
      },
      providesTags: ["Pictures"]
    }),
    getPictureDetail: builder.query<Picture, number>({
      query: (id) => `pictures/${id}`
    }),
  })
})

export const { useGetAllPicturesQuery, useGetPictureDetailQuery } = picturesApi

