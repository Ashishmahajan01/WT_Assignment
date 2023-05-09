function indianwelcome(){
    return 'namaste....'
}
function greet(message){
    let guest =["Ashish","Deepak","Ruturaj","Gaurav","Shashank"]
    for(let n in guest){
        console.log(message(),guest[n])
    }
}
greet(indianwelcome)