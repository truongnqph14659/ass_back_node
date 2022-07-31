import Product from "../../model/product";

export const Search = async (req,res)=>{
    try {
        // console.log(req.body);
        const data = await Product.find().where({name:/product/});
        res.json(data)
    } catch (error) {
        res.status(400).json(
            { 
                message: 'khong tìm duoc san pham '
            }
        )
    }
}