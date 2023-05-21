let obj = {
    fname:"AAA",
    show: function(){
        console.log(this.fname)
    },
    display:()=>{
        console.log("Welcome in fat arrow ",this.fname)
    }
}

obj.show() //IF I call the function usinf obj  then this=obj(IMPLICIT)
obj.display()

let f1 = obj.show
f1() //function is called without object so this= undefined



f1=f1.bind(obj) // EXPLICITLY binding the "this" with obj 
f1()



