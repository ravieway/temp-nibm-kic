const { json, query } = require("express");
const express = require("express");
const logger = require("./2-express-tutorial/logger");
const authorize = require("./2-express-tutorial/authorize");
const morgan = require('morgan')
const app = express();

//req => middleware => res'
//1. route vs use
// options- our own/express/third party

// app.use([logger, authorize])
//app.use(express.static('public'))
app.use(morgan('tiny'))

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/items",[logger, authorize], (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
