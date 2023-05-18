//Event Listeners
// document.getElementsByName("button").addEventListener("mousemove",()=>{
//   document.getElementsByName("button").style.height = '50px';
//   document.getElementsByName("button").style.opacity = '1';
//   setTimeout(()=>{
//     document.getElementsByName("button").style.height = '40px';
//     document.getElementsByName("button").style.opacity = '0.8';
//   },500)
// })
document.getElementById('chat_button').addEventListener("mouseenter",()=>{
  document.getElementById('chat_button').style.background = '#3A98B9';
  document.getElementById('chat_button').style.shadow = '1px';
})
document.getElementById('chat_button').addEventListener("mouseleave",()=>{
  document.getElementById('chat_button').style.background = '#FF55BB';
})

function doMath(x){
  var num = document.getElementById('number1').value;
  document.getElementById('number1').style.visibility = 'hidden';
  document.getElementById('table1').style.visibility = 'hidden';
  document.getElementById('header1').style.visibility = 'hidden';
  document.getElementById('button1').style.background= '#B04759';
  document.getElementById('button1').style.color= '#FFF7D4';
  document.getElementById('button1').style.font= 'bold';
  document.getElementById('button1').style.height= '50px';
  document.getElementById('button1').style.width= '200px';
  document.getElementById('button1').style.visibility = 'visible';
console.log(x);

  switch (x) {
    case 1:
    console.log(doSquare(num));
      break;
    case 2:
    console.log(doPower(num));
    break;
  }
  function doSquare(num){
    var sq = num * num;
    document.getElementById('button1').innerHTML = `Square of the number is ${sq}`;
    console.log(document.getElementById('button1').getAttribute('type'));
  }
  function doPower(num){
    document.getElementById('button1').innerHTML = `Cube of the number is ${(num*num*num)}`;
  }
  setTimeout(()=>{
    document.getElementById('number1').style.visibility = 'visible';
    document.getElementById('table1').style.visibility = 'visible';
    document.getElementById('header1').style.visibility = 'visible';
    document.getElementById('button1').style.visibility = 'hidden';
  },1500);
}

let input = [1,2];
function filter_function(x){
  if(x==1){
  input.push(Number(document.getElementById('array_input').value));
  console.log(input);
}
else{
  //document.getElementsByClassName('array[]').style.visibility='hidden';
  var output=input.filter((e)=>e%2==0)
  console.log(output);
  for(i=0;i<output.length;i++){

    document.getElementById('button3').innerText = `Input array is ${(input)}`;
    document.getElementById('button2').innerText = `Even Number array is ${(output)}`;
    console.log(output[i]);
  }
  document.getElementById('button3').style.visibility='visible';
  document.getElementById('button2').style.visibility='visible';
  setTimeout(()=>{
    //getElementsByClassName('array[] array1[]').style.visibility='visible';

    document.getElementById('button3').style.visibility='hidden';
    document.getElementById('button2').style.visibility='hidden';
  },1000);
}
}


function printday(){
  document.getElementById("header2").style.visibility="hidden";
  document.getElementById("input_date").style.visibility="hidden";

  let arr=["Sunday","Monday","Tuesday","Wednesday","Thurday","Friday","Saturday"];
  let date_value=document.getElementById("input_date").value;
  let date = new Date(date_value);

  document.getElementById('button5').style.visibility='visible';
  document.getElementById('button5').style.background='#263A29';
  document.getElementById('button5').style.color='white';
  document.getElementById('button5').style.height='50px';
  document.getElementById('button5').innerHTML=`${arr[date.getDay()]}`;
  setTimeout(
    ()=>{
      document.getElementById("header2").style.visibility="visible";
      document.getElementById("input_date").style.visibility="visible";
      document.getElementById('button5').style.visibility='hidden';
    },1000
  )
}

let arrayOfObject = [];
class Person{
  constructor(PersonName,PersonAge){
    this.Pname = PersonName;
    this.Page = PersonAge;
    arrayOfObject.push({pname: PersonName,page: PersonAge});
  }
  show_details(){
    document.getElementById('division1').innerHTML=`<b>${this.Pname}</b>`;
    document.getElementById('division2').innerHTML=`<b>${this.Page}</b>`;
    console.log(arrayOfObject);
  }
}

function person_function(){
  var PersonName = document.getElementById('person_name').value;
  var PersonAge = document.getElementById('person_age').value;
document.getElementById("table2").style.visibility="visible";
  let obj = new Person(PersonName,PersonAge);
  obj.show_details();
  setTimeout(()=>{
    document.getElementById("table2").style.visibility="hidden";
  },1500)
}


function constructor_function(Pname,Page){
  this.Pname=Pname;
  this.Page=Page;
  this.showdetail=()=>{console.log(this.Pname+this.Page)}
}
