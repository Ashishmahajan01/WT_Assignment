
//Item is an alias for Product class in this file 
import Item from "./Product.js"
import { sayHi as welcome } from "./mylib.js"


let p = new Item("chocolate",50,"cadbury")
p.show()
welcome("rucha")