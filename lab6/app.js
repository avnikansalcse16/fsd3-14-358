import express from "express";
import { products } from "./data.js";   

const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Hello from express</h1>");
});

app.get("/api/products", (req, res) => {
    const { description, rating, ...rest}= products[0];
    const filterproducts = products.map((product) => {
        const { description, rating, ...rest } = product;
        return rest;
    });
       
    //res.send(filteredProducts);
   // res.json(filterproducts);
   res.json({ count: filterproducts.length, data: filterproducts });
});

app.get("/api/products/:productID", (req, res) => {
    const {id}= req.params;
    const product = products.find((item) => item.id === Number(id));

    if(!product) {
        return res.status(400).json({ error: "Products not found" });
    } else {

        return res.status(200).json({ product });
    }
});

 app.listen(3333, () => {
    console.log('Server is running on port 3333');  
});   



