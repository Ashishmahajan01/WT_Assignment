import express from 'express'
let app = express()

import planetsrouter from './planetsRouter.js'
app.use("/planets",planetsrouter)

app.use(express.json())
import productrouter from './productrouter.js'
app.use("/product",productrouter)



import guestrouter from "./guestRouter.js"
app.use("/atithi",guestrouter)

app.listen(2000,()=>{
    console.log("the server runs on port number 2000")
})