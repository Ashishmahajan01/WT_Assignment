function domath(choice){
    function dosquare(x){
        return x*x
    }
    function dopower(a,b){
        let p =Math.pow(a,b)
        return p
    }
    
    if(choice==1){
        return dosquare
    }
    else{
        return dopower
    }
}
let v=domath(1)
let s = v(12)
console.log(s)

let l=domath(2)
console.log(l(2,3))