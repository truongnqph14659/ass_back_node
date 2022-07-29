import express from "express";
import { createProduct } from "../controller/Product/createProduct";
import { remove } from "../controller/Product/deleteProduct";
import { read } from "../controller/Product/findOneProduct";
import { list } from "../controller/Product/listProduct";
import { update } from "../controller/Product/updateProduct";

const router = express.Router();

router.get("/products", list)
router.get("/products/:id", read)
router.post("/products", createProduct)
router.delete("/products/:id", remove)
router.patch("/products/:id", update)

export default router;
