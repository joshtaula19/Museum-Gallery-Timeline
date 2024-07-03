import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchArtists } from "../apiClient"

export default function PokemonDetail() {
  const { name } = useParams()
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


  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}