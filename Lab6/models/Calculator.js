const Logger = require('./Logger');

class Calculator {
  constructor() {
    this.id = Math.random();
  }

  add(num1, num2) {
    Logger.log(`Calculation ID ${this.id}: Adding ${num1} + ${num2}`);
    return num1 + num2;
  }

  subtract(num1, num2) {
    Logger.log(`Calculation ID ${this.id}: Subtracting ${num1} - ${num2}`);
    return num1 - num2;
  }

  multiply(num1, num2) {
    Logger.log(`Calculation ID ${this.id}: Multiplying ${num1} * ${num2}`);
    return num1 * num2;
  }

  divide(num1, num2) {
    Logger.log(`Calculation ID ${this.id}: Dividing ${num1} / ${num2}`);
    if (num2 === 0) {
      Logger.log(`Calculation ID ${this.id}: Division by zero is not allowed`);
      throw new Error('Division by zero is not allowed');
    }
    return num1 / num2;
  }
}

module.exports = Calculator;