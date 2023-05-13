import { Router } from "express";
let guestrouter = Router()
let guests = [];

export default guestrouter

let hostname= "THOR"
// guestrouter.get("/",(req,res)=>{
//     res.send(`this is a server site of ${hostname}'s guests `)
// })



guestrouter.get('/', (req, res) => {
    res.send(`host name is ${hostname}`)
    
  });

guestrouter.get('/all',(req,res)=>{
    const guestList=guests.map((guest,index)=>`${index}${guest}`);
    res.send(guestList)   //join will return a new string by concatening all the element of array

})  

guestrouter.post('/addguest', (req, res) => {
    const guestName = req.query.guestname;
    guests.push(guestName);
    res.send(`Guest "${guestName}" added successfully.`);
  });

guestrouter.get('/guestcount', (req, res) => {
    const guestCount = guests.length;
    res.send(`Total guest count: ${guestCount}`);
  });

guestrouter.put('/changeguestname/:index/:changedname', (req, res) => {
    const index = req.params.index;
    const changedName = req.params.changedname;
   
    if (index >= 0 && index < guests.length) {
      guests[index] = changedName;
      res.send(`Guest name at index ${index} changed to "${changedName}".`);
    } else {
      res.status(404).send('Invalid index.');
    }
  });  

  guestrouter.delete('/removeguest/:index', (req, res) => {
    const index = req.params.index;
  
    if (index >= 0 && index < guests.length) {
      guests.splice(index, 1);
      res.send(`Guest at index ${index} removed successfully.`);
    } else {
      res.status(404).send('Invalid index.');
    }
  });






