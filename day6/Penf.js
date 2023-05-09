


function Pen(penColor,penCost)
{
    this.pcolor = penColor
    this.pcost = penCost

    this.showPenInfo = function(){
        console.log(this.pcolor,this.pcost)
    }
}

let obj = new Pen("blue",20)
console.log(obj.pcolor,obj.pcost)
obj.showPenInfo()

console.log(obj)

let arr= []
arr.push(new Pen("blue",20))
arr.push(new Pen("black",10))
arr.push(new Pen("green",30))

for(let i=0;i<arr.length;i++){
    console.log(arr[i],i)
}

console.log(obj["pcolor"], obj.pcolor)