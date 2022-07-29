import Category from "../../model/category";
export const list = async (req, res, next) => {
    try {
        const data = await Category.find().exec();
        res.json(data);
    } catch (error) {
        res.status(404).json({ error: 'Không có sản phẩm nào '})
    }
};