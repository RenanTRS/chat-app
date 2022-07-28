import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import cors from 'cors'

import 'dotenv/config'

const app = express()

app.use(cors())
app.use(express.json())

const serverHttp = http.createServer(app)
const io = new Server(serverHttp, {
  cors: {
    origin: process.env.BASE_URL,
    methods: ['GET', 'POST']
  }
})

export { serverHttp, io }
