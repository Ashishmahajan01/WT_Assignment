import {Router} from 'express'

let addrouter = Router()
export default addrouter

import {arr} from "./productrouter.js"

addrouter.post("/",(req,res) =>{
    let data = req.body
    arr.push(data)
    res.send("Data successfully Inserted")
})
