import Order from '../../model/order'

export const CeatedOrder =async (req,res)=>{
    try {
        // console.log(req.body);
        const data = await new Order(req.body).save();
        res.json(data)
    } catch (error) {
        res.status(400).json(
            { 
                message: 'khong them duoc san pham '
            }
        )
    }
}

//list order
export const List = async (req,res)=>{
    try {
        const data = await Order.find();
        res.json(data)
    } catch (error) {
        res.status(400).json(
            { 
                message: 'khong them duoc san pham '
            }
        )
    }
}