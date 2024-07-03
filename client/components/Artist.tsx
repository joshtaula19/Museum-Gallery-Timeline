import { fetchArtists } from "../apiClient"
import { useQuery } from "@tanstack/react-query"

export default function Artist() {
  const { data: artists, isPending, isError } = useQuery({
    queryKey: ['Artists'],
    queryFn: () => fetchArtists()
  })
  if (isPending) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Something went wrong...</div>
  }
console.log(artists)
  return (
    <>
      <h1>Harvard Artists Through Time:</h1>
      <ul>
      {artists.records.map((artist) => (
          <li key={artist.id}>
            <h2>{artist.displayname}</h2>
          </li>
        ))}
      </ul>
    </>
  )
}