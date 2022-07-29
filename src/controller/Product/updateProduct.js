import Product from "../../model/product";

export const update = async (req, res) => {
    try {
        const product = await Product.findOneAndUpdate({_id: req.params.id}, req.body, { new: true } )
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: 'Không sửa được sản phẩm'
        })
    }
}