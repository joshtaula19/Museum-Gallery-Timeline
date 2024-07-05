import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchImageDetails } from '../apiClient'
import { ImageDetails } from '../../models/image'
import { formatDate } from './ArtistList'

export default function ArtistDetail() {
  const { id } = useParams<{ id: string }>()

  const {
    data: imageDetails,
    isPending,
    isError,
  } = useQuery<ImageDetails, Error>({
    queryKey: ['ImageData'],
    queryFn: () => fetchImageDetails(Number(id)),
  })

  if (isPending) {
    return <div>Loading...</div>
  }

  if (isError || !imageDetails) {
    return <div>Something went wrong...</div>
  }

  return (
    <div>
      <h1>Image Info</h1>
      <img
        className="image timeline  container right-side"
        src={imageDetails.baseimageurl}
        alt="artistImages"
      />
      <p>
        <strong>Date:</strong> {formatDate(imageDetails.date)}
      </p>
      <p>
        <strong>Description:</strong>{' '}
        {imageDetails.description ?? 'No description :('}
      </p>
      <p>
        <strong>Caption:</strong> {imageDetails.caption ?? 'No caption :('}
      </p>
      <p>
        <strong>Alt text:</strong> {imageDetails.alttext ?? 'No alt text :('}
      </p>
      <p>
        <strong>Technique:</strong> {imageDetails.technique}
      </p>
    </div>
  )
}
