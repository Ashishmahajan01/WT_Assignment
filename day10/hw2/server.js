import express from "express";
let app = express()

import productrouter from "./productrouter.js"
app.use(express.json())
app.use("/product", productrouter)

import addrouter from "./addrouter.js"
app.use("/add", addrouter)


import getInforouter from "./getInforouter.js"
app.use("/getInfo", getInforouter)

import allrouter from "./allrouter.js"
app.use("/all", allrouter)

import changecostrouter from "./changecostrouter.js"
app.use("/changecost", changecostrouter)

import removerouter from "./removerouter.js"
app.use("/remove", removerouter)


app.listen(5755, () =>{
    console.log("Ashish is Enjoying!!!")
})



