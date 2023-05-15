let arr =[
{"productId":1, "productName":"ashish","costPerUnit":30,"units":2},
{"productId":2, "productName":"gaurav","costPerUnit":30,"units":2},
{"productId":3, "productName":"deepak","costPerUnit":30,"units":2},
{"productId":4, "productName":"deepak","costPerUnit":30,"units":2},
{"productId":5, "productName":"deepak","costPerUnit":30,"units":2},
{"productId":6, "productName":"deepak","costPerUnit":30,"units":2},
{"productId":7, "productName":"gaurav","costPerUnit":30,"units":2},
{"productId":8, "productName":"gaurav","costPerUnit":30,"units":2},
{"productId":9, "productName":"gaurav","costPerUnit":30,"units":2},
{"productId":10, "productName":"ashish","costPerUnit":30,"units":2},
{"productId":11, "productName":"ashish","costPerUnit":30,"units":2},
{"productId":12, "productName":"ashish","costPerUnit":30,"units":2}

]
console.log("Enter the name")
//me name enter kela 
let nametodelete = "gaurav"
let tempvariable =0
let temparr=[]

//this loop is to traverse through the array and save the product id of 
//every index where the name 'gaurav' matches is new arr


var clean = arr.filter((arr, index, self) =>
    index === self.findIndex((t) => (t.save === arr.save && t.State === arr.State)))
