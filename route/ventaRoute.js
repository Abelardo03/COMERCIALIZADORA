import { Router } from "express";

const ventaRoute = Router()
import {getventa, postventa, putventa, deleteventa } from '../Controllers/ventaController.js'

ventaRoute.get('/',getventa)
ventaRoute.post('/',postventa)
ventaRoute.put('/',putventa)
ventaRoute.delete('/_id', deleteventa)

export default ventaRoute