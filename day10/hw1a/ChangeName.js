import { Router } from 'express'
import { arr } from './allrouter.js'
let changename = Router();
import { num } from './addrouter.js'
export default changename

changename.put('/:index/:name', (req, res) => {

    let index = req.params.index
    let name = req.params.name

    if (index > 0 && index < arr.length) {
        arr[index] = index + "." + name;

        res.send(arr)

    }
    else {
        res.send("invalid text")
    }
})
