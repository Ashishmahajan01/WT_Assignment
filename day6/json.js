let obj = {personName:"XXX" , personAge:20}

console.log(obj.personName,obj.personAge)

let arr = []
arr.push({personName:"XXX" , personAge:20})
arr.push({personName:"YYY" , personAge:30})
arr.push({personName:"PPP" , personAge:10})

console.log(arr)
totalage=0
arr.forEach( (b)=>{ totalage=totalage+b.personAge})
console.log(totalage)


