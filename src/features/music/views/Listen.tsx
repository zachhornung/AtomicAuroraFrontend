import { BasePage } from "../../../shared/components/BasePage"
import { useGetSpotifyTopTracksQuery } from "../state/services/musicApi"


export const Listen = () => {
  const { data, error } = useGetSpotifyTopTracksQuery()
  console.log("spotify error: ", error)
  console.log("spotify data: ", data)
   
  return (
    <BasePage>
      <p>listen now section</p>
      <div id="embed-iframe"></div>
      {data?.tracks.length ? data?.tracks.map(track => <button data-spotify-uri={track.uri} >{track.name}</button>) : null}
    </BasePage>
  )
}
