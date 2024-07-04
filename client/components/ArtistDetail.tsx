import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchArtist } from '../apiClient'

export default function ArtistDetail() {
  const { name } = useParams()
  const {
    data: artists,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['Artists'],
    queryFn: () => fetchArtist(),
  })
  if (isPending) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Something went wrong...</div>
  }

  return (
    <div>
      <h1>Artist Info</h1>
      <p>{}</p>
    </div>
  )
}
