import express from 'express'
import { add } from '../controller/category/addCategory'
import { list } from '../controller/category/listCategory'
import { read } from '../controller/category/listCategoryId'
import { remove } from '../controller/category/removeCategory'
import { update } from '../controller/category/updateCategory'
import { requireSignin } from '../controller/middleware/checkAuth'
const router = express.Router()
router.get('/category', list)
router.get('/category/:id', read)
router.post('/category', requireSignin, add)
router.delete('/category/:id',requireSignin,remove)
router.patch('/category/:id',requireSignin,update)
export default router
