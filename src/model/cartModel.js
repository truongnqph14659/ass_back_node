import mongoose from "mongoose";

const CartSchema = mongoose.Schema({
    name:{
        type:String,
    },
    phone:{
        type:Number
    },
    note:{
        type:String,
    },
    total:{
        type:Number
    },
    user_id:{
        type:Number
    },
    addreess:{
        type:String
    },
},{timestamps:true})

export default mongoose.model('cart',CartSchema)