import Order from "../../model/order";
import Orderdetail from '../../model/orderdetail'

export const CeatedOrder = async (req, res) => {
  try {
    // console.log(req.body);
    const data = await new Order(req.body).save();
    res.json(data);
  } catch (error) {
    res.status(400).json({
      message: "khong them duoc san pham ",
    });
  }
};

//list order
export const List = async (req, res) => {
  try {
    const data = await Order.find();
    res.json(data);
  } catch (error) {
    res.status(400).json({
      message: "khong them duoc san pham ",
    });
  }
};

export const update = async (req, res) => {
  try {
    const data = await Order.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
  } catch (error) {
    res.status(400).json({
        error: "không tìm thấy sản phẩm",
      });
  }
};

export const read = async (req, res, next) => {
  try{
      const order = await Order.findOne({_id: req.params.id}).exec();
      // const Orderdetail = await Orderdetail.find({order_id: order}).populate('order_id').select("-order_id").exec();
       const Orderdetail = await Orderdetail.find({order_id: order})
      res.json({
          order,
          Orderdetail
      });   
} catch  (error){
  res.status(400).json({
      error: 'Khong tim duoc danh muc'
  })
}
}