import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userRouter from './router/userRouter'
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
app.use('/api/user', userRouter)
app.listen(process.env.PORT, () => {
  console.log(`connected port ${process.env.PORT}`)
})
