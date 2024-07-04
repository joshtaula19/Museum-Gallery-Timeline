import request from 'superagent'
// import type { Museum } from '../models/museum'
import type { Image, ImageDetails } from '../models/image.ts'
import type { Person } from '../models/people.ts'
// import router from '../server/routes/artists.ts'

const serverURL = 'https://api.harvardartmuseums.org'
const apiKey = import.meta.env.VITE_API_KEY

export async function fetchImage(): Promise<Image> {
  try {
    const res = await request.get(`${serverURL}/image?apikey=${apiKey}&size=100&sortorder=desc`)
    return res.body as Image
  } catch (error) {
    console.error('Error fetching images:', error)
    throw error
  }
}

export async function fetchImageDetails(imageId: number): Promise<ImageDetails> {
  try {
    const res = await request.get(
      `${serverURL}/image/${imageId}?apikey=${apiKey}`,
    )
    return res.body as ImageDetails
  } catch (error) {
    console.error('Error fetching artists:', error)
    throw error
  }
}
