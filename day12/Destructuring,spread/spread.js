let arr = {
    "name": "Ashish",
    "age": 20,
    "dob": {
        "nam": "Akash",
        "age": 12
    }
}


// let arr1 = arr;
// console.log(arr)
// console.log(arr1)

let arr2 = [1, 2, 3, 4]
let arr3 = [4, 5, 6, arr2]
console.log(arr3) //it will give shallow copy
let arr4 = [4, 5, 6, ...arr2]
console.log(arr4) //this will give deep copy



