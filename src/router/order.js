import express from 'express'
import { CeatedOrder } from '../controller/order/createdOrder'

const router = express.Router()

router.post("/Order",CeatedOrder)

export default router