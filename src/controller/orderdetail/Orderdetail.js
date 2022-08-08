import Orderdetail from '../../model/orderdetail'

export const CeatedOrderdetail =async (req,res)=>{
    try {
        // console.log(req.body);
        const data = await new Orderdetail(req.body).save();
        res.json(data._id)
    } catch (error) {
        res.status(400).json(
            { 
                message: 'khong them duoc san pham '
            }
        )
    }
}