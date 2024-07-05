import ArtistList from './ArtistList.tsx'
import { Routes, Route } from 'react-router-dom'
import ArtistDetail from './ArtistDetail.tsx'

function App() {
  return (
    <>
      <div className="App">
        <h1>Museum Gallery Timeline</h1>
        <Routes>
          <Route path="/" element={<ArtistList />} />
          <Route path="/artist/:id" element={<ArtistDetail />} />
          <Route path="/image/:id" element={<ArtistDetail />} />
        </Routes>
      </div>
    </>
  )
}

export default App
