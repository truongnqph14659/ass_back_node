import Category from "../../model/category";
export const remove = async (req, res) => {
    try {
        const id = req.params.id; 
        const category = await Category.findOneAndDelete({_id: id}).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: 'Không thêm được sản phẩm'
        })
    }
}