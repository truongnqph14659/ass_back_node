import express from 'express';
import { list} from '../controller/category/listCategory';
import { add } from '../controller/category/creatCategory';
import { read } from '../controller/category/listCategoryId';
import { update } from '../controller/category/updateCategory';
import { remove } from '../controller/category/removeCategory';

const router = express.Router();



router.get("/category", list);
router.get("/category/:id", read);
router.post("/category", add);
router.delete("/category/:id", remove);
router.patch("/category/:id", update);


export default router;