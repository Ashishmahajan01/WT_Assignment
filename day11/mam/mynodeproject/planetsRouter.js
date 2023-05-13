
import { Router  } from "express"
let planetsrouter = Router()
export default planetsrouter

let planets=["earth","mars","jupiter","saturn"]

planetsrouter.get("/",(req,res)=>{
    res.send("hi we are on planet earth")
})

planetsrouter.get("/all",(req,res)=>{
    res.send(planets)
})


planetsrouter.post("/add/:planetname",(req,res)=>{

    planets.push(req.params.planetname)
    res.send(`added successfully`)

})







