const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const lab2_router = require("./route.js");  


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/lab2",lab2_router);

app.get("/", (req, res) => {
  res.send("Hello to base server"); 
});

app.get("", (req,res) => {
  res.send("PAGE NOT FOUND");
});


app.listen(PORT, () => {
  console.log(`http://127.0.0.1:${PORT}`);
});


const test = (req, res, next) => {
  console.log(req.query.test_validation);
  console.log(req.originalUrl);
  console.log(new Date().toUTCString());
  next(); 

};




const validate = (req, res, next) => {
  console.log(req.query.test_validation);
  console.log(req.originalUrl);
  console.log( new Date());
  next(); 
};

app.get("/route_test", validateTestQuery, (req, res) => {
  res.send("Printed Successfully");
});
