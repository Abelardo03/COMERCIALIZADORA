import { Schema, model } from "mongoose";

const ventaSchema = new Schema({
    idSale:{
        type: Number,
        unique: true,
        require:[true,'the field id is required'],
        minlength:[1, 'min 1 characteres']
    },
    referenceVenta:{
        type: String,
        require: [true, 'the field reference is required']
        
    },
    date:{
        type: Date,
        require:[true, 'the field date is required']
    },
    TotalUnit:{
        type: Number,
        require:[true, 'the field total is required']
    }

})
export default model ('Venta', ventaSchema, 'venta')
