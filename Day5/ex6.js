function greet(message){
    let guest =["Ashish","Deepak","Ruturaj","Gaurav","Shashank"]
    for(let n in guest){
        console.log(message(),guest[n])
    }
}
greet(function(){return "HowD"}) // Known as anonymous function (function without name)


let j = function(){return 'konnichiva'}
greet(j)
