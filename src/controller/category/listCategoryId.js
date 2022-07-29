import Category from "../models/category";
import Product from "../models/product"
export const read = async (req, res, next) => {
    try{
        const category = await Category.findOne({_id: req.params.id}).exec();
        const products = await Product.find({category: category}).populate('category').select("-category").exec();
        res.json({
            category,
            products
        });   
} catch  (error){
    res.status(400).json({
        error: 'Khong tim duoc danh muc'
    })
}
}
