import { join } from 'node:path'
import * as Path from 'node:path'
import * as URL from 'node:url'
import express from 'express'
import artists from './routes/artists.ts'

const server = express()

server.use(express.json())

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

server.use(express.json())
server.use('/api/v1/artists', artists)
server.use(express.static(join(__dirname, './public')))

export default server
