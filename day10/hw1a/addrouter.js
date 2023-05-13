import { Router } from 'express'
import { arr } from "./allrouter.js"
let addrouter = Router()
export default addrouter


//let guestname = []
let num = arr.length

addrouter.post("/", (req, res) => {
    num = num + 1
    let user = num + "." + req.query.guestName
    arr.push(user)
    let ress = ``
    res.send(arr)
})

export { num }
