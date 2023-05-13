import express from 'express'
let app = express()


import guestrouter from "./guestrouter.js"
app.use("/guest", guestrouter)

import allrouter from "./allrouter.js"
app.use("/all", allrouter)

import addrouter from "./addrouter.js"
app.use("/add", addrouter)


import guestcountrouter from "./guestcountrouter.js"
app.use("/guestcount", guestcountrouter)


import changename from "./ChangeName.js"
app.use("/ch", changename)

import Delete from "./Delete.js"
app.use("/del", Delete)


app.listen(5755, () => {
    console.log("Akash is running on port number 5755")

})




