const Calculator = require('../models/Calculator');
const Logger = require('../models/Logger');

const calculatorController = {
  add: (req, res) => {
    const { num1, num2 } = req.query;
    const calculator = new Calculator();
    const result = calculator.add(parseInt(num1), parseInt(num2));
    Logger.log(`Result of Calculation ID ${calculator.id}: ${result}`);
    res.status(200).json({ result });
  },

  subtract: (req, res) => {
    const { num1, num2 } = req.query;
    const calculator = new Calculator();
    const result = calculator.subtract(parseInt(num1), parseInt(num2));
    Logger.log(`Result of Calculation ID ${calculator.id}: ${result}`);
    res.status(200).json({ result });
  },

  divide: (req, res) => {
    const { num1, num2 } = req.query;
    const calculator = new Calculator();
    const result = calculator.divide(parseInt(num1), parseInt(num2));
    Logger.log(`Result of Calculation ID ${calculator.id}: ${result}`);
    res.status(200).json({ result });
  },

  multiply: (req, res) => {
    const { num1, num2 } = req.query;
    const calculator = new Calculator();
    const result = calculator.multiply(parseInt(num1), parseInt(num2));
    Logger.log(`Result of Calculation ID ${calculator.id}: ${result}`);
    res.status(200).json({ result });
  },
};

module.exports = calculatorController;
