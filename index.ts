import express from 'express'
import mongoose from 'mongoose'

import env from './config/env'

import routes, { home } from './routes'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', home)
app.use('/api', routes)

try {
    const { connection } = await mongoose.connect(env.MONGODB_URI)
    console.log(`MongoDB Connected at Host: ${connection.host}, Port: ${connection.port}`)
    
    app.listen(env.APP_PORT, () => console.log(`Express Server Running at Port: ${env.APP_PORT}`))
} catch(error) {
    console.log(error.message)
}
