import mongoose,{ObjectId} from "mongoose";

const OrderdetailSchema = mongoose.Schema({
    quantity:{
        type:Number
    },
    product_id:{
        type:ObjectId,
        ref: 'products'
    },
    price:{
        type:Number
    },
    order_id:{
        type:ObjectId,
        ref: 'Order'
    },
},{ timestamps: true })

export default mongoose.model('Orderdetail',OrderdetailSchema)