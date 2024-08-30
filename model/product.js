import { Schema, model } from "mongoose";

const productSchema = new Schema({
    referenceProduct:{
        type: Number,
        unique: true,
        require:[true,'the field reference is required'],
        minlength:[1, 'min 1 characteres']
    },
    nameproduct:{
        type: String,
        require: [true, 'the name product is required']
        
    },
    priceProduct:{
        type: Number,
        require:[true, 'price required'],
        min: [100, 'price min is 100']
    },
    unitProduct:{
        type: Number,
        require:[true, 'the field unit is required']
    }

})

export default model ('Product', productSchema, 'product')


