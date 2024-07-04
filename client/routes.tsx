import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App.tsx'
import ArtistList from './components/ArtistList.tsx'
import ArtistDetail from './components/ArtistDetail.tsx'

export const routes = createRoutesFromElements(
  <Route element={<App />}>
    <Route index element={<ArtistList />} />
    <Route path="image/:id" element={<ArtistDetail />} />
  </Route>
)