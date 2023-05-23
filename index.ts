import express from 'express'
import mongoose from 'mongoose'

import env from './config/env'

const app = express()

try {
    await mongoose.connect(env.MONGODB_URI)
    console.log('MongoDB Connected')
    
    app.listen(env.APP_PORT, () => console.log('Express Server Running'))
} catch(error) {
    console.log(error.message)
}
