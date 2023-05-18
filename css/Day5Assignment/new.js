let arr = [1,2,3,4];
console.log("hii",this.name);


function constructor_function(Pname,Page){
  this.Pname=Pname;
  this.Page=Page;
  this.anuja=function anuja(){return("Anuja")}
  this.showdetail=()=>{return(this.anuja())}
}

var anujajr = {
  name: "Anuja",
  age: 90,
  moveHouse: function(){ //method
    return("Anuja")
  }
}


function IndianWelcome(){
  return "RAM RAM TAU....";
}

function greet(message){
  var guest = ["Anuja","Ronaldo"];
  for(n of guest){
    console.log(message(),n)
  }
}

greet(IndianWelcome)

greet(function(){return "hello"})
greet(()=>"Howdy")
// greet(anuja)
// greet()




let obj=new constructor_function("anuja",22)
// let obj1 = [{Pname: "Anuja", Page: "12"}]
// console.log(obj);
// console.log(obj.Pname, obj.Page);
// console.log(obj.showdetail());

 for(x in obj){
   console.log(x+" "+obj[x]);
 }
// const p="Anujasdasd"
// console.log(obj.showdetail());
// console.log(typeof(p));



//Do in line JS
