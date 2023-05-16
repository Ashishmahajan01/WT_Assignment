
let obj = {
    fname: "AAA",
    show: function () {
        console.log(this.fname)
    }
}

obj.show() //IF I call the function usinf obj  then this=obj(IMPLICIT)


let f1 = obj.show
f1() //function is called without object so this= undefined

f1 = f1.bind(obj) // EXPLICITLY binding the "this" with obj 
f1()


//let a = function ()

// let obj = {
//     fname: "AAA",

// }
// let show = () => {
//     console.log(obj.fname)
// }
// console.log(typeof (show))
// show()
// let show1 = function () {
//     console.log(obj.fname)
// }
// console.log(typeof (show1))
// show1()