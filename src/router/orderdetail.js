import express from 'express'
import orderdetail from '../model/orderdetail'

const router = express.Router()

router.post("/Orderdetail",orderdetail)

export default router