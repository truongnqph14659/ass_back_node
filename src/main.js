import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import routerProduct from './router/product';

const app = express()
app.use('/api', routerProduct)
try {
  ;(async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/ontap')
    console.log('connected db ')
  })()
} catch (error) {
  console.log('fail to connect db')
}
app.use(express.json())
app.use(cors())
app.listen(process.env.PORT, () => {
  console.log(`connected port ${process.env.PORT}`)
})
