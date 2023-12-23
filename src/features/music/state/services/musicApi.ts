import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type SpotifyResponse = {
  tracks: SpotifyTrack[],
}

export type SpotifyTrack = {
  album: Album,
  name: string,
  uri: string,
}

export type Album = {
  album_type: string
}

export const musicApi = createApi({
  reducerPath: 'musicApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_BASE_URL}/api/`, credentials: "include" }),
  endpoints: (builder) => ({
    getSpotifyTopTracks: builder.query<SpotifyResponse, Record<string, string> | void>({
      query: () => {
        return 'music/spotify/top_tracks/'
      },
    }),
  })
})

export const { useGetSpotifyTopTracksQuery } = musicApi
