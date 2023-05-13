import express from 'express'
let app = express()
import path from "path"
app.set('views', './views');
app.set('view engine', 'hbs');


app.get("/hello",(req,res)=>{
     res.sendFile("E:\\Courses\\HTML\\CSS\\CSS\\WPT-May23\\11-may\\mynodeproject\\test.html")
})

app.get("/verify",(req,res)=>{
        let user = req.query.uname
        let pwd= req.query.password

        //if(user == "iet" && pwd == "123")
           res.render("welcome",{username:user})   
        //res.sendFile("E:\\Courses\\HTML\\CSS\\CSS\\WPT-May23\\11-may\\mynodeproject\\welcome.html")     
        //else
        //res.sendFile("E:\\Courses\\HTML\\CSS\\CSS\\WPT-May23\\11-may\\mynodeproject\\test.html")

})

app.get("/calculator",(req,res)=>{
    res.render("calc")
})

import bodyParser from 'body-parser'
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/docalculation",(req,res)=>{
    let n1 = req.body.num1
    let n2 = req.body.num2
    
    let sum=parseInt(n1)+parseInt(n2)
    res.render("calc",{result:sum})
})


app.get("/maths",(req,res)=>{
    res.render("mathstable")
})

app.post("/generate-table",(req,res)=>{
      let n1 = req.body.num1
      let arr=[]
      for(var i=0;i<=10;i++)
      {
        arr[i] = `${n1}*${i}=${n1*i}`
      }
      res.render("mathstable",{rowdata:arr})
})

app.listen(2500,(req,res)=>{
    console.log("server runs on port 2500 ")
})