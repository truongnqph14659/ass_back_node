import express from 'express'
import { CeatedOrder, List, update} from '../controller/order/createdOrder'

const router = express.Router()

router.post("/Order",CeatedOrder)
router.get("/Order",List)
router.put("/Order/:id",update)

export default router