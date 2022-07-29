import { signin, signup } from '../controller/userController'
import express from 'express'
const userRouter = express.Router()
userRouter.route('/signup').post(signup)
export default userRouter
