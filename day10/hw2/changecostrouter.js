import {Router} from "express"

let changecostrouter = Router()
export default changecostrouter

import {arr} from "./productrouter.js"


changecostrouter.post("/:Id/:cost",(req,res) =>{
    let resId =req.params.Id
    let newcost = req.params.cost
    for(let x in arr){
        if(arr[x].productId == resId){
            arr[x].costPerUnit = newcost
            res.send(arr)
        }
    }
})
