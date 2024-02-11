import { apiSlice } from '../../../../state/services/shared/apiSlice'

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

export const musicApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSpotifyTopTracks: builder.query<SpotifyResponse, Record<string, string> | void>({
      query: () => {
        return 'music/spotify/top_tracks/'
      },
    }),
  })
})

export const { useGetSpotifyTopTracksQuery } = musicApi
