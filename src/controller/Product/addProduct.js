import Product from "../../model/product";

export const add = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        res.json(product)
    } catch (error) {
        res.status(400).json({ error: 'khong them duoc san pham '})
    }
}