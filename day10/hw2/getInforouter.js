import {Router} from 'express'

let getInforouter = Router()
export default getInforouter

import {arr} from "./productrouter.js"

getInforouter.post("/",(req,res) =>{
    let resId =req.query.Id
    for(let x in arr){
        if(arr[x].productId == resId){
            res.send(arr[x])
        }
    }
})
