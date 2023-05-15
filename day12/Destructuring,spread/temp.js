//spread operator 


//deep copy

// shallow copy

let arr = {
    "a": "aaa",
    "age": 20,
    "baaboo": {
        "name": "Abhi",
        "age": 200
    }
}
// //console.log(arr)
// let temp = arr
// temp.baaboo.age = 20
// console.log(temp)
// console.log(arr)


let temp = { ...arr, baaboo: { ...arr.baaboo } }
console.log(arr)
console.log(temp)
temp.baaboo.name = "bvbbb"
//temp.baaboo.age = 1000
console.log(arr)
console.log(temp)