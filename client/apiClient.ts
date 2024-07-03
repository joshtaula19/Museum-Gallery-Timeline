import request from 'superagent'
import type { Museum } from '../models/museum'

export async function fetchArtists() {
  const res = await request.get('/api/v1/artists')
  
  return res.body as Museum
}
