import { Router } from "express";
import express from "express"

let productrouter = Router()


export default productrouter

let hostname="THOR"

productrouter.get('/',(req,res)=>{
    res.send(`host name is ${hostname}`)
})

productrouter.use(express.json());

// POST /add - Add a product to the array
let products = [
    {
      "productId": 1,
      "productName": "AAA",
      "costPerUnit": 30,
      "units": 2
    }
  ];
  
  // Endpoint to add a product
  productrouter.post('/add', (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.send("added")
  });


// GET /getInfo - Get product info by ID
productrouter.get('/getInfo', (req, res) => {
    const prodId = req.query.productId;
    const product = products.find(p =>p.productId == prodId);  //find returns value of first elemnet which passses test
    console.log(product)
    if (product != undefined) {
      res.json(product);
    } else {
      res.json({ message: 'Product not found' });
    }
  });

  // GET /all - Get all products
  productrouter.get('/all', (req, res) => {
    res.json(products);
  });


  // PUT /changecost - Change product cost by ID
  productrouter.put('/changecost/:productId/:cost', (req, res) => {
    const prodId = req.params.productId;
    const newCost = req.params.cost
    const product = products.find(p => p.productId == prodId);
    if (product != undefined) {
      product.costPerUnit = newCost;
      res.send("cost updated");
    } else {
      res.json({ message: 'Product not found' });
    }
  });


  // DELETE /remove - Remove product by ID
  productrouter.delete('/remove/:productId', (req, res) => {
    const productId = req.params.productId;
    const index = products.findIndex(p => p.productId === productId);
    if (index !== -1) {
      products.splice(index, 1);
      res.send("product removed");
    } else {
      res.json({ message: 'Product not found' });
    }
  });

