import express from 'express'
import { requireSignin } from '../controller/middleware/checkAuth'
import { add } from '../controller/Product/addProduct'
import { remove } from '../controller/Product/deleteProduct'
import { read } from '../controller/Product/findOneProduct'
import { list } from '../controller/Product/listProduct'
import { Search } from '../controller/Product/search'
import { update } from '../controller/Product/updateProduct'

const router = express.Router()

router.get('/products', list)
router.get('/products/:id', read)
router.post('/products', requireSignin, add)
router.delete('/products/:id', requireSignin, remove)
router.patch('/products/:id', requireSignin, update)
router.get('/search', Search)

export default router
