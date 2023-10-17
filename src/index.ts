import express from 'express'
import { createServer } from 'http'
import {router} from './routes/routes'
import { config } from 'dotenv'
config()

const cors = require('cors')


const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(router)

const port = process.env.PORT || 3000
const httpServer = createServer(app)

httpServer.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
