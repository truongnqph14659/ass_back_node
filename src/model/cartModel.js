import mongoose from "mongoose";

const CartSchema = mongoose.Schema({
    name:{
        type:String,
        minlength:2
    },
    phone:{
        type:Number,
        required: true
    },
    note:{
        name:String
    },
    toal:{
        type:Number,
        required: true,
    },
    user_id:{
        type:Number,
        required: true,
    },
    addreess:{
        type:String
    },
},{ timestamps: true })

export default mongoose.model('Cart',CartSchema)