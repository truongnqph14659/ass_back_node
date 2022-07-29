import Product from "../../model/product";

export const createProduct = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        return res.json(product)
    } catch (error) {
        return res.status(400).json({ error: 'Không thêm được sản phẩm '})
    }
}