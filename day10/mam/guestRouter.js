import { Router } from "express";
let guestrouter = Router()
export default guestrouter

let hostname= "prachi"
guestrouter.get("/",(req,res)=>{
    res.send(`this is a server site of ${hostname}'s guests `)
})
