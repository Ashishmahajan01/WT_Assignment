import {Router} from 'express'

let productrouter = Router()
export default productrouter

let arr = [{"productId":1, "productName":"AAA","costPerUnit":30,"units":2},{"productId":2, "productName":"BBB","costPerUnit":10,"units":5}]

productrouter.get("/",(req,res)=>{
    res.send(arr)
    
})

export {arr}