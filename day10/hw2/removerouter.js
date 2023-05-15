import {Router} from "express"


let removerouter = Router()
export default removerouter

import {arr} from "./productrouter.js"


removerouter.delete("/:Id",(req,res)=>{
    let removeId = req.params.Id

    for(let x in arr){
        if(arr[x].productId == removeId){
            let index = x
            arr.splice(index,1)
            res.send(arr)
        } 
    
}
})