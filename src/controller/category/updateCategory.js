import Category from "../../model/category";
export const update = async (req, res) => {
    try {
        const category = await Category.findOneAndUpdate({_id: req.params.id}, req.body, { new: true } )
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: 'Không thêm được sản phẩm'
        })
    }
}