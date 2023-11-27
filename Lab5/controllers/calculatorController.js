const calculatorModel = require('../models/calculatorModel');

const calculatorController = {
  add: (req, res) => {
    const { num1, num2 } = req.query;
    const result = calculatorModel.add(parseInt(num1), parseInt(num2));
    res.status(200).json({ result });
  },

  subtract: (req, res) => {
    const { num1, num2 } = req.query;
    const result = calculatorModel.subtract(parseInt(num1), parseInt(num2));
    res.status(200).json({ result });
  },

  divide: (req, res) => {
    const { num1, num2 } = req.query;
    const result = calculatorModel.divide(parseInt(num1), parseInt(num2));
    res.status(200).json({ result });
  },

  multiply: (req, res) => {
    const { num1, num2 } = req.query;
    const result = calculatorModel.multiply(parseInt(num1), parseInt(num2));
    res.status(200).json({ result });
  },
};

module.exports = calculatorController;
