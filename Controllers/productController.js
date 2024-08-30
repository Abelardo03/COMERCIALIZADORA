
import product from "../model/product.js";

export async function getproduct(req, res) {
    const products = await product.find()
    res.json(products)
}
export async function postproduct(req, res) {
    const body = req.body
    let msg = 'the product is inserted succesfull'
    try{
        const products = new product(body)
        await products.save()

    } catch(error){
    msg= error
    }
    res.json({msg:msg})
}

export async function putproduct(req, res) {
    const { referenceProduct,
        nameproduct,
        priceProduct,
        unitProduct}= req.body
        let msg = 'the product update'
        try {
            await product.findOneandUpdate({referenceProduct:referenceProduct},{nameproduct:nameproduct},{priceProduct:priceProduct},{unitProduct:unitProduct})
        }catch(error){
            msg = error
        }
        res.json({msg:msg})
}

export async function deleteproduct(req, res) {
    const _id = req.params.id
    try{
        await product.findByIdAndUpdate(_id)
        res.json('the product delete succesfull')
    }catch(error){
        req.status(500).json(error,{msg:'there was problem deliting product'})
    }
}