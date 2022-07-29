import Product from "../../model/product";

export const remove = async (req, res) => {
    try {
        const id = req.params.id; 
        const product = await Product.findOneAndDelete({_id: id}).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: 'Không thêm được sản phẩm'
        })
    }
}