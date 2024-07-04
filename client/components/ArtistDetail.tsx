import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchArtist } from '../apiClient'
import { Person } from '../../models/people'

export default function ArtistDetail() {
  const { id } = useParams<{ id: string }>()

  const {
    data: artist,
    isPending,
    isError,
  } = useQuery<Person, Error>({
    queryKey: ['artist', id],
    queryFn: () => fetchArtist(id),
  })

  if (isPending) {
    return <div>Loading...</div>
  }

  if (isError || !artist) {
    return <div>Something went wrong...</div>
  }

  return (
    <div>
      <h1>Artist Info</h1>
      <p>
        <strong>Name:</strong> {artist.record.displayname}
      </p>
      <p>
        <strong>Gender:</strong> {artist.gender}
      </p>
      <p>
        <strong>Display Date:</strong> {artist.displaydate}
      </p>
      <p></p>
    </div>
  )
}
