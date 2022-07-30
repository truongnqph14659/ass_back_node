export const add = async (req, res, next) => {
    try {
        const category = await new Category(req.body).save();
        res.json(category);
    } catch (error) {   
        res.status(404).json({ error: 'Không thêm được sản phẩm '})
    }
}