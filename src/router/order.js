import express from 'express'
import { CeatedOrder, List } from '../controller/order/createdOrder'

const router = express.Router()

router.post("/Order",CeatedOrder)
router.get("/Order",List)

export default router