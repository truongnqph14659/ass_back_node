import express from 'express'
import { Created } from '../controller/CartController'

const router = express.Router()

router.post("add/Cart",Created)


export default router