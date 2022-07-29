import Product from "../../model/product";

export const read = async (req, res) => {
    const filter = { _id: req.params.id };
    const populate = req.query["_expand"];
    try {
        
        const product = await Product.findOne(filter).select("-__v").populate(populate).exec();
        console.log('product', product);
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm thấy sản phẩm",
            error
        });
    }
};