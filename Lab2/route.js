const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the home page");
});

router.get("/name", (req, res) => {
  res.send("Ishpreet");
});
router.get("/greetings", (req, res) => {
  res.send("Name: Ishpreet Singh , Student Number:N01641707");
});
router.get("/add/:x/:y", (req, res) => {
  const x = parseFloat(req.params.x);
  const y = parseFloat(req.params.y);
  if (isNaN(x) || isNaN(y)) {
    return res.send("Invalid input: x and y must be valid numbers.");
  } else {
    res.send(JSON.stringify(x + y));
  }
});
router.get("/calculate/:x/:y/:operator", (req, res) => {
  const operator = req.params.operator;

  const x = parseFloat(req.params.x);
  const y = parseFloat(req.params.y);
  if (isNaN(x) || isNaN(y)) {
    return res.send("Invalid input: x and y must be valid numbers.");
  }

  if (operator == "+") {
    res.send(JSON.stringify(x + y));
  } else if (operator == "-") {
    res.send(JSON.stringify(x - y));
  } else if (operator == "/") {
    res.send(JSON.stringify(x / y));
  } else if (operator == "*") {
    res.send(JSON.stringify(x * y));
  }
});
module.exports = router;


app.post('/submit', (req, res) => {
  res.send('Post request received!');
});