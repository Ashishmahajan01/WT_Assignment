import express from "express"

let app = express()


import guestrouter from "./guestRouter.js"
app.use("/atithi",guestrouter)

app.listen(2000,()=>{
    console.log("the server runs on port number 2000")
})



