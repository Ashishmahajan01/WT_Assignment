import { Router } from 'express'
import { arr } from "./allrouter.js"
let addrouter = Router()
export default addrouter

// //let guestname = []
let num = arr.length
//console.log(arr)

addrouter.post("/", (req, res) => {
    num = num + 1
    let user = num + "." + req.query.guestName
    console.log(user)
    arr.push(user)
    res.send(arr)
    console.log(arr.length)
})