const express = require("express");
const cors = require("cors");

require("./db");

const Product = require("./Product");
const Customer = require("./Customer");
const Bill = require("./Bill");

const app = express();

app.use(cors());
app.use(express.json());

// Add Product
app.post("/product", async (req, res) => {
    const data = await Product.create(req.body);
    res.json(data);
});

// Add Customer
app.post("/customer", async (req, res) => {
    const data = await Customer.create(req.body);
    res.json(data);
});

// Save Bill
app.post("/bill", async (req, res) => {
    const data = await Bill.create(req.body);
    res.json(data);
});

// Get Products
app.get("/products", async (req, res) => {
    res.json(await Product.find());
});

// Get Customers
app.get("/customers", async (req, res) => {
    res.json(await Customer.find());
});

// Get Bills
app.get("/bills", async (req, res) => {
    res.json(await Bill.find());
});

// Start Server
app.listen(5000, () => {
    console.log("✅ Server Running on http://localhost:5000");
});