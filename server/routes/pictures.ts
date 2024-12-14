import express from 'express'
import request from 'superagent'

const router = express.Router()
const apiKey = process.env.VITE_API_KEY

router.get('/', async (req, res) => {
  try {
    const response = await request
      .get('https://api.harvardartmuseums.org/image')
      .query({
        apikey: apiKey,
        size: 100,
        sortorder: 'desc',
      })
    res.json(response.body)
  } catch (error) {
    console.error('Error in backend:', error)
    res.status(500).json({ error: 'Failed to fetch images' })
  }
})

router.get('/:imageId', async (req, res) => {
  try {
    const { imageId } = req.params
    const response = await request
      .get(`https://api.harvardartmuseums.org/image/${imageId}`)
      .query({ apikey: apiKey })
    res.json(response.body)
  } catch (error) {
    console.error('Error in backend:', error)
    res.status(500).json({ error: 'Failed to fetch image details' })
  }
})

export default router
