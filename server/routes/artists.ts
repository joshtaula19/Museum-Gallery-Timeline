import express from 'express'
import request from 'superagent'
import 'dotenv/config'

const router = express.Router()

const token = process.env.TOKEN || ''

router.get('/', async (req, res) => {
    try {
        const response = await request
        .get(`https://api.harvardartmuseums.org/person?apikey=${token}`)
        .auth(token, { type: 'bearer' })
        res.json(response.body)
    } catch (e) {
        console.log(e)
    }
})

export default router