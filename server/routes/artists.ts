import express from 'express'
import request from 'superagent'
import 'dotenv/config'

const router = express.Router()

const token = process.env.TOKEN || ''

router.get('/', async (req, res) => {
  try {
    const response = await request
      .get(`https://api.harvardartmuseums.org/person`)
      .query({ apikey: token })
    res.json(response.body)
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Failed to fetch data' })
  }
})

export default router
