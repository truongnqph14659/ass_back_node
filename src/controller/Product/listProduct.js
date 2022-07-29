import Product from "../../model/product";

export const list = async (req, res) => {
    try {
        const data = await Product.find();
        res.json(data);
    } catch (error) {
        res.status(400).json({
            error: "Không có sản phẩm nào"
        })
    }
};