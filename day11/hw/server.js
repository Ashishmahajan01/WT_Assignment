import express from 'express'
let app = express()
import path from "path";
app.set('views', './views');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.sendFile("D:\\Ashish\\C. DAC\\IET\\WT\\Assignment\\day11\\hw\\index.html")
})

app.get('/Images/images.jpg', (req, res) => {
    res.sendFile("D:\\Ashish\\C. DAC\\IET\\WT\\Assignment\\day11\\hw\\Images\\images.jpg")
})

app.get('/login', (req, res) => {
    res.sendFile("D:\\Ashish\\C. DAC\\IET\\WT\\Assignment\\day11\\hw\\login.html")
})  

app.get('/chechDetails', (req, res) => {
    
    if (req.query.username == 'tiger' && req.query.password == '123') {

        res.render('welcome', { userName: req.query.username })
    }
    else {

        res.sendFile("D:\\Ashish\\C. DAC\\IET\\WT\\Assignment\\day11\\hw\\index.html")
    }

})

app.listen(1001, () => {
    console.log("LET'S GOOOOO 1001")
})