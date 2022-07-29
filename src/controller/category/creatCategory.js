import Category from "../../model/category";

export const add = async (req, res) => {
    console.log(req.body);
    try {
        const category = await new Category(req.body).save();
        // console.log(req.body);
        res.json(category);
    } catch (error) {   
        res.status(404).json({ error: 'Không thêm được sản phẩm '})
    }
}