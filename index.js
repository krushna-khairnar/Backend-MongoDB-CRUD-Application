require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { Product } = require('./models/product.model');

const app = express();
app.use(express.json());

const uri = process.env.MONGO_URI;
console.log("Mongo URI:", uri);

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

//READ
app.get('/products', async (req,res) => {
    const response = await Product.find({});
    res.status(200).json(response);
})

//READ by API ID
app.get('/products/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const response = await Product.findById(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({
            msg: "Cannot find product with provided ID"
        })
    }

})

//CREATE
app.post('/products', async (req,res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({
            msg: "Something went Wrong ! "
        })
    }
})

//UPDATE
app.put('/products/:id', async (req,res) => {
    try {
        const {id} = req.params;
        const response = await Product.findByIdAndUpdate(id,req.body);
        
        if(!response) {
            res.status(400).json({msg: "Cannot find Product"})
        }

        const updateProduct = await Product.findById(id);
        res.status(200).json(updateProduct);

    } catch (error) {
        res.status(400).json({
            msg: "Cannot update product with provided ID"
        })
    }
})

//DELETE
app.delete('/products/:id', async (req,res) => {
    try {

        const {id} = req.params;
        const response = await Product.findByIdAndDelete(id);

        if(!response) {
            res.status(400).json({msg: "Cannot find Product"})
        }

        res.status(200).json({msg: "Product Deleted Successfully"});
        
    } catch (error) {
        res.status(400).json({
            msg: "Cannot delete product with provided ID"
        })
    }
})

app.listen(3000, ()=> {
    console.log("app is listening on port 3000")
});