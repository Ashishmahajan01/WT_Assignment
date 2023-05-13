import express from 'express';

let app = express()

app.get('/', (request, response) => {
    return response.send('HI From SERVER ');
  });
  
app.get("/kyaboltatu",(req,res)=>{
    return res.send("Lai bhari")
})

app.post("/postit",(req,res)=>{
    res.send("POST method received your request")
})

app.put("/putit",(req,res)=>{
  res.send("PUT method received your request")
})

app.delete("/delit",(req,res)=>{
  res.send("DELETE method received your request")
})

app.post("/login",(req,res)=>{
      let user = req.query.uname
      let pwd = req.query.password

      if(user == "iet" && pwd == "123")
        res.send(`welcome ${user}`)
      else
        res.send("wrong credentials")

})


app.get("/factorial/:num",(req,res)=>{
  console.log("the factorial is called")
  let n = req.params.num
  let fact=1
  for(var i=2;i<=n;i++)
  {
     fact = fact * i
  }
  res.send(`the factorial of ${n} is ${fact}`)

})

app.use(express.json())
app.delete("/should_we_throw",(req,res)=>{
    let pname= req.body.productName
    let datestr = req.body.dateOfExpiry

    let d = new Date(datestr)
    let today = new Date()

    if(today > d)
        res.send(`throw ${pname} , already expired`)
    else  
       res.send(`you can use ${pname} `)






})



  
app.listen(5000, () => {
    console.log('App is listening on port 5000');
  });