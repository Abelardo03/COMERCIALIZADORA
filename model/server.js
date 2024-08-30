import express, { json } from "express";
import 'dotenv/config'
import dbconnection from "../Database/config.js"
import productRoute from "../route/productRoute.js"
import ventaRoute from "../route/ventaRoute.js"
class server{
    constructor(){
    this.app = express()
    this.listen()
    this.router()
    this.dbconnection()
    }
    async dbconnection(){
        await dbconnection()
    }
    router(){
        this.app.use(json())
        this.app.use('/api/product', productRoute)
        this.app.use('/api/venta', ventaRoute)
    }

    listen(){
        this.app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port: ${process.env.PORT}`)})
    }
}

export default server