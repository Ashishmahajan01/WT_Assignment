import { Router } from 'express'
import { arr } from "./allrouter.js"

let guestcountrouter = Router()
export default guestcountrouter

//console.log(arr.length)

let count = arr.length
//console.log(count)
guestcountrouter.get("/", (req, res) => {
    res.send(count)

})