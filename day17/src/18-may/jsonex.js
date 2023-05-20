let obj ={num1:12, data:"this is the number of pens"}

console.log("obj.num1=",obj.num1)
console.log("obj=",obj)

let str = JSON.stringify(obj)
console.log("str",str)
console.log("str.num1",str.num1)

console.log(JSON.parse(str))

