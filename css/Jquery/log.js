$(document).ready(()=>{
  $('button').mouseenter(()=>{
    $('button').css({'background-color': '#FF55BB'})
  });
  $('button').mouseleave(()=>{
    $('button').css({'background-color': '#FFF7D4'})
  });
});
$(document).ready(()=>{
  $('#btn1').click(()=>{
        $('#div1').fadeIn()
        $('#div1').animate({left: "300px"})
        $('#div1').animate({height: "300px"},"slow")
        $('#div1').animate({width: "300px"},"slow")
        $('#div1').animate({width: "20px"},"slow")
        $('#div1').animate({height: "20px"},"slow")
        $('#div1').fadeOut()
  });
});
$(document).ready(()=>{
$('#btn2').click(()=>{
  $('center').append('<p>hello</p>')
  $('center').append('<p><u>hello</u></p>')
  $('center').append('<p><i>hello</i></p>')
  $('center p').fadeOut(900)
});
});
$(document).ready(()=>{
  $('#input1').change(()=>{
    let x = $('#input1').val();
    let s = 1;
    for(let i=x; i>0; i--){
      s = s*i;
    }
    console.log(s)
    $('#fact1').text(s);
  });
});

$(document).ready(()=>{
  $('#btn3').click(()=>{
  let x = $('#input2').val();
  let y = $('#input3').val();
  let z = $('#input4').val();
  for(let i=y; i<=z; i++){
  $('table').append(`<tr><td>${x} x ${i}:</td><td>${x*i}</td></tr>`)}
  $('table').fadeOut(5000);
});
});


$(document).ready(function(){
$("#btn4").click(function(){
let x=$("#input5").data("myline")
let str=$("#input5").val()

let a = 0;
let len = str.length;
let b = len/x;

$('#strout').html('');
for(let i=0;i<x;i++){
  let newstr = str.slice(a,b);
  console.log(newstr)
  $('#strout').append(`${newstr}<br>`)
  a=b;
  b=b+len/x
}
});
$("#btn4").click(()=>{
  let y = $("#input5").data("myline")
  let x=$("#input5").data("myline",y+1)
});
});

$(document).ready(()=>{
  $('#ball2').click(()=>{
    console.log("hii")
    $('#ball2').css({'position': "relative"});

    // $('#ball1').animate({right: "50%"},"slow");
    $('#ball1').animate({top: "300px"});
    $('#ball1').animate({top: "100px"});
    $('#ball1').animate({top: "300px"});
    $('#ball1').animate({top: "150px"});
    $('#ball1').animate({top: "300px"});
    $('#ball1').animate({top: "200px"});
    $('#ball1').animate({top: "300px"});
    // $('#ball1').animate({top: "200px"});
  //   // $('#ball1').animate({top: "100px"}, "fast");
  //   // $('#ball1').animate({bottom: "50px"}, "fast");
  //   // $('#ball1').animate({top: "50px"}, "fast");
  })
})
