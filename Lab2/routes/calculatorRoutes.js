const express = require('express');
const router = express.Router();

// Route for addition
router.get('/add', (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = number1 + number2;
  console.log(sum);
  res.status(200).json({ result: sum });
});

// Route for subtraction
router.get('/subtract', (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let result = number1 - number2;
  console.log(result);
  res.status(200).json({ result });
});

// Route for division
router.get('/divide', (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  if (number2 === 0) {
    // Handle division by zero
    res.status(400).json({ error: 'Division by zero is not allowed' });
  } else {
    let result = number1 / number2;
    console.log(result);
    res.status(200).json({ result });
  }
});

// Route for multiplication
router.get('/multiply', (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let result = number1 * number2;
  console.log(result);
  res.status(200).json({ result });
});

module.exports = router;
