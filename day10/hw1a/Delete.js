import { Router } from 'express'
import { arr } from './allrouter.js'
let Delete = Router()

export default Delete



Delete.put('/:index', (req, res) => {

    let ind = req.params.index


    if (ind > 0 && ind < arr.length) {
        arr.splice(ind, 1);
        res.send(arr)

    }
    else {
        res.send("invalid text")
    }
})
