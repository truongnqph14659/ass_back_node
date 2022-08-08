import express from 'express'
import { CeatedOrderdetail } from '../controller/orderdetail/Orderdetail'

const router = express.Router()

router.post("/Orderdetail",CeatedOrderdetail)

export default router