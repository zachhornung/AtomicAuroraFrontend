import { Picture } from '../../../../state/services/picturesApi'
import { apiSlice } from '../../../../state/services/shared/apiSlice'


export type ShowType = {
  name: string,
  description: string,
  show_date: string,
  pictures?: Picture[],
}

export const showsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllShows: builder.query<ShowType[], Record<string, string> | void>({
      query: (params) => {
        if (Object.keys(params || {}).length) {
          const q = new URLSearchParams(params || {})
          return `shows/?${q.toString()}`
        }
        return 'shows/'
      },
      providesTags: ["Shows"]
    }),
    getShowDetail: builder.query<ShowType, number>({
      query: (id) => `shows/${id}`
    }),
  })
})

export const { useGetAllShowsQuery, useGetShowDetailQuery } = showsApi
