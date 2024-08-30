import { Router } from "express";

const productRoute = Router()
import {getproduct, postproduct, putproduct, deleteproduct } from '../Controllers/productController.js'

productRoute.get('/',getproduct)
productRoute.post('/',postproduct)
productRoute.put('/',putproduct)
productRoute.delete('/_id', deleteproduct)

export default productRoute