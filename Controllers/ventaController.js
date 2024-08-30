

import venta from "../model/venta.js"

export async function getventa(req, res) {
    const ventas = await venta.find()
    res.json(ventas)
}
export async function postventa(req, res) {
    const body = req.body
    let msg = 'the product is inserted succesfull'
    try{
        const ventas = new venta(body)
        await ventas.save()
    } catch(error){
    msg= error
    }
    res.json({msg:msg})
}

export async function putventa(req, res) {
    const { idSale,
        referenceVenta,
        date,
        TotalUnit}= req.body
        let msg = 'the product update'
        try {
            await venta.findOneandUpdate({idSale:idSale},{referenceVenta:referenceVenta},{date:date},{TotalUnit:TotalUnit})
        }catch(error){
            msg = error
        }
        res.json({msg:msg})
}

export async function deleteventa(req, res) {
    const _id = req.params.id
    try{
        await venta.findByIdAndDelete({_id})
        res.json('the venta delete succesfull')
    }catch(error){
        res.status(500).json(error,{msg:'there was problem deliting product'})
    }
}