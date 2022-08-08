import express from 'express'
import { CeatedOrder, List, read, update} from '../controller/order/createdOrder'

const router = express.Router()

router.post("/Order",CeatedOrder)
router.get("/Order",List)
router.put("/Order/:id",update)
router.get("/Order/:id",read)

export default router