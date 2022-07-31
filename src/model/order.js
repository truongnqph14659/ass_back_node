import mongoose,{ObjectId} from "mongoose";

const OrderSchema = mongoose.Schema({
    name:{
        type:String,
        request:true
    },
    phone:{
        type:Number
    },
    note:{
        type:String
    },
    total:{
        type:Number
    },
    user_id:{
        type:ObjectId,
        ref: 'user'
    },
    addreess:{
        type:String
    }
},{ timestamps: true })

export default mongoose.model('Order',OrderSchema)