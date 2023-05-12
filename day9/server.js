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



app.listen(5755, () => {
    console.log("Aksh get fucked!!!! on port number 5755")

})




