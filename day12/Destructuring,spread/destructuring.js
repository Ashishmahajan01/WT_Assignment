let obj = { p1: 10, p2: 20, p3: 30 }

//let { p1, p2 } = obj
//console.log(p1, p2)


// let { p1, p2, p3 } = obj
// console.log(p1, p2, p3)


//let { x1, x2 } = obj //will give error  because variable name and key name in array should
//console.log(x1, x2) //get matched


//if you want to use other variable name

// let { p3: z } = obj
// console.log(z)



let stack = [10, 20, 30, 40, 50]
//let [a, b] = stack
let [a, , , , b] = stack
console.log(a, b)

