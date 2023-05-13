import {Router} from "express"

let allrouter = Router()
export default allrouter


import {arr} from "./productrouter.js"

allrouter.get("/",(req,res) =>{
    res.send(arr)
})
