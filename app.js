const express = require("express");
var app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");
const auditRoutes = require("./api/routes/audit");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://expelee:expelee@cluster0.emvn8dw.mongodb.net/?retryWrites=true&w=majority"
);

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
//extract json data
app.use(bodyParser.json());
//routes which can handle request

// app.use((req, res, next) => {
//   res.header("Content-Type", "application/json");
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "*");
//   //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Authorization");

//   if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE,GET");
//     return res.status(200).json({});
//   }
// });
app.use("/products", productRoutes);
app.use("/order", orderRoutes);
app.use("/api/auditReport", auditRoutes);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error?.message,
    },
  });
});
app.use((req, res, next) => {
  console.log("hiiii");
});
module.exports = app;
