import { fetchImage } from '../apiClient'
import { useQuery } from '@tanstack/react-query'
import { Image } from '../../models/image.ts'
import '../../main.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ArtistDetail from './ArtistDetail.tsx'
// import ArtistDetail from './ArtistDetail.tsx'

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
              <h1>Timeline:</h1>
              {images.records.map((images) => (
                <div className="image-card" key={images.id}>
                  <Link to={`/artist/${images.idsid}}?`}>
                    <img
                      className="image"
                      src={images.baseimageurl}
                      alt="artistImages"
                    />
                  </Link>
                </div>
              ))}
            </>
          }
        />
        <Route path="/artist/:id" element={<ArtistDetail />} />
      </Routes>
    </Router>
  )
}
