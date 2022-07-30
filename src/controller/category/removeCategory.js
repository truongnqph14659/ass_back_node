import category from '../../model/category';
export const remove = async (req, res) => {
    try {
        const id = req.params.id; 
        const Category = await category.findOneAndDelete({_id: id}).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: 'Không xoa được sản phẩm'
        })
    }
}