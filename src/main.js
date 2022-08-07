import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import product from './router/product'
import category from './router/category'
import order from './router/order'
import user from './router/userRouter'
import orderdetail from './router/orderdetail'
const app = express()
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
app.use('/api/', order)
app.use('/api/', product)
app.use('/api/', user)
app.use('/api/', orderdetail)
// Global error handler
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(err.status).send({ message: err.message })
    return
  }
  next()
})
app.listen(process.env.PORT, () => {
  console.log(`connected port ${process.env.PORT}`)
})
