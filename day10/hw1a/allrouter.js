import { Router } from 'express'

let allrouter = Router()
export default allrouter


let arr = ['1.dani', '2.lana', '3.mia', '4.brandy', '5.angella', '6.pipper perry', '7.mia malkuaa', '8.Johny Brother']

allrouter.get("/", (req, res) => {
    let temp = arr.map((ele, index) => {
        let name = ele;
        return name;
    })
    return res.send(temp);
})

export { arr } 