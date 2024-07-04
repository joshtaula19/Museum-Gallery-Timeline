import { fetchImage } from '../apiClient'
import { useQuery } from '@tanstack/react-query'
import { Image } from '../../models/image.ts'
import '../../main.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ArtistDetail from './ArtistDetail.tsx'

export default function ImageList() {
  const {
    data: images,
    isPending,
    isError,
  } = useQuery<Image, Error>({
    queryKey: ['Images'],
    queryFn: fetchImage,
  })
  console.log('State: ', { isPending, isError, images })
  if (isPending) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Something went wrong...</div>
  }
  if (!images || !images.records) {
    return <div>No images data available</div>
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="timeline">
                {images.records.map((images) => (
                  <div className={`image-card`} key={images.id}>
                    <Link to={`/artist/${images.id}}?`}>
                      <div
                        className={`image-date left-side container-text text-box`}
                      >
                        {formatDate(images.date)}
                      </div>
                    </Link>
                    <Link to={`/artist/${images.id}}?`}>
                      <img
                        className="image timeline  container right-side"
                        src={images.baseimageurl}
                        alt="artistImages"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </>
          }
        />
        <Route path="/artist/:id" element={<ArtistDetail />} />
      </Routes>
    </Router>
  )
}

export function formatDate(date: Date | null): string {
  if (!date) return 'No date available'
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return new Date(date).toLocaleDateString(undefined, options)
}
