import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import routerProduct from './router/product'
import product from './router/product'
import category from './router/category'

const app = express()
app.use('/api', routerProduct)
try {
  ;(async () => {
    await mongoose.connect(
      `mongodb+srv://${process.env.DATABASE}:${process.env.PASSWORD}@cluster0.wbb0p5v.mongodb.net/nodejs`
    )
    console.log('connected db ')
  })()
} catch (error) {
  console.log('fail to connect db')
}
app.use(express.json())
app.use(cors())
app.use('/api/', category)
app.use('api/', product)
app.listen(process.env.PORT, () => {
  console.log(`connected port ${process.env.PORT}`)
})
