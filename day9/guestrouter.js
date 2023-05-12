import { Router } from 'express'

let guestrouter = Router()
export default guestrouter

let hostname = "DoWhile"
guestrouter.get("/", (req, res) => {
    res.send(`This is Guest of ${hostname} Group Jii jii Boys!!!`)
})


