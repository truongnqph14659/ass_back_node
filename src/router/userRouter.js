import express from 'express'
import { register, signin } from '../controller/user/userAction'
import { checkJwt, requireSignin } from '../controller/middleware/checkAuth'
// import checkUser from '../controller/user/checkuser'
const router = express.Router()
router.post('/user/register', register)
router.post('/user/signin', signin, requireSignin, checkJwt)
// router.param('/user/signin', checkUser)
export default router
