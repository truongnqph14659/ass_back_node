import express from 'express'
import { register, signin } from '../controller/user/userAction'
// import {} from '../controller/middleware'
import checkUser from '../controller/user/checkuser'
const router = express.Router()
router.post('/user/register', register)
// router.post('/user/signin', signin)
// router.param('/user/signin', checkUser)
export default router
